/* eslint-disable no-undef */
const supertest = require('supertest');
const router = require('../app');

describe('Test Books View Route', () => {
  test('Test /books/view endpoint', (done) => {
    supertest(router)
      .get('/books/view')
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
