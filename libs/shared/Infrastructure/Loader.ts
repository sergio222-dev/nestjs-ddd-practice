import { parse }        from "dotenv";
import { readFileSync } from "fs";

type SettingsCaller<T = any> = (envSettings: any) => T
type ConfiguratorCaller = () => any;

type LoaderOptions = {
  envFilePath: string;
}

export class SettingScope<T = any> {
  constructor(
    private _settingName: string,
    private _setting: SettingsCaller<T>
  ) {}

  get settingName(): string {
    return this._settingName;
  }

  get setting(): SettingsCaller {
    return this._setting;
  }

  retrieve(envSetting: Record<string, unknown>): T {
    return this.setting(envSetting);
  }
}

export class Loader {
  private settingsScopes: SettingScope[] = [];
  private readonly envSettings: any;

  constructor({ envFilePath }: LoaderOptions) {
    this.envSettings = parse(readFileSync(envFilePath));
  }

  private mergeSettings(name: string) {
    return this.settingsScopes
      .filter(s => s.settingName === name)
      .map(s => s.retrieve(this.envSettings))
      .reduce((acc, cur) => ({ ...acc, ...cur }));
  }

  addSetting(settings: SettingScope[]): void {
    this.settingsScopes.push(...settings);
  }

  retrieveSettings(): ConfiguratorCaller[] {
    const settingNames = this.settingsScopes
      .map(s => s.settingName);
    return [...new Set(settingNames)]
      .map(k => [k, this.mergeSettings(k)])
      .map(([k, o]) => (): any => ({[k]: o}));
  }

  retrieve(settingName: string): any {
    return this.mergeSettings(settingName);
  }
}