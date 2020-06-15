import config
                               from "@libs/first-aprox-lib/config/mikro-orm.config";
import { Course }              from "@libs/first-aprox-lib/Courses/Domain/Models/Course";
import { CourseMother }          from "../Domain/CourseMother";
import { CourseEntity }          from "@libs/first-aprox-lib/Courses/Domain/Entity/CourseEntity";
import { EntityManager }         from "mikro-orm";
import { MikroOrmModule }        from "nestjs-mikro-orm";
import { CourseRepository }      from "@libs/first-aprox-lib/Courses/Domain/Models/CourseRepository";
import { Test, TestingModule } from "@nestjs/testing";
import { MikroCourseRepository } from "@libs/first-aprox-lib/Courses/Infrastructure/persistense/MikroCourseRepository";

describe('Mikro repository', () => {
  let repository: CourseRepository;
  const course: Course = CourseMother.random();
  let em: EntityManager;
  let moduleRef: TestingModule;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [
        MikroOrmModule.forRoot(config)
      ],
    }).compile()
    em = moduleRef.get<EntityManager>(EntityManager);
    repository = new MikroCourseRepository(em, CourseEntity);
  })

  it('Should not be null', () => {
    expect(repository).not.toBeNull();
  })

  it(`Should save something with id ${course.id.value}`, async () => {
    await repository.save(course);
  })

  it(`Should search something with id ${course.id.value}`, async () => {
    const result = await repository.search(course.id);
    expect(result).toEqual(course);
  })

  it(`Should delete something with id ${course.id.value}`, async () => {
    await repository.delete(course.id);
  })

  afterAll(async () => {
    em.clear()
    await em.getConnection().close();
    await moduleRef.close();
  })

});