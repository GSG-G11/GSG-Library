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

  test('Test received data', (done) => {
    supertest(router)
      .get('/books/view')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body[0]).toEqual({
          id: 1,
          name: 'The Diary of a Young Girl',
          description:
            'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
          category: 'History',
          image: 'shorturl.at/mHSZ5',
          author: 'Anne Frank',
        });
        done();
      });
  });
});
