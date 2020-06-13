import * as request          from 'supertest';
import {INestApplication}    from '@nestjs/common';
import {Test}                from '@nestjs/testing';
import {AppModule}           from '@app/first-aprox/backend/src/app.module';

describe('CourseController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    })
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  })

  it('/PUT id', () => {
    return request(app.getHttpServer())
      .put('/course/1')
      .expect(201)
      .expect({});
  });

  afterAll(async () => {
    await app.close();
  })
});