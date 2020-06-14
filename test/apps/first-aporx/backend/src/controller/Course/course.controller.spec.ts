import * as request         from "supertest";
import { Test }             from "@nestjs/testing";
import { AppModule }        from "@app/first-aprox/backend/src/app.module";
import { INestApplication } from "@nestjs/common";

describe("CourseController", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    })
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it("/PUT id", () => {
    return request(app.getHttpServer())
      .put("/course/55db512c-adf3-11ea-b06a-0242ac130003")
      .send({
        name: "A course name",
        duration: "like 5 hours"
      })
      .expect(201)
      .expect("like 5 hours");
  });

  afterAll(async () => {
    await app.close();
  });
});