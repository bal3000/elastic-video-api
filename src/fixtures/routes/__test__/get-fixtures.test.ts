import request from 'supertest';

import app from '../../../app';

it('returns fixtures for a club', async () => {
  const { body: matches } = await request(app)
    .get('/api/fixtures/c8h9bw1l82s06h77xxrelzhur')
    .expect(200);

  expect(matches.length).toBeGreaterThan(0);
});

it('returns 404 if no fixtures are found', async () => {
  await request(app).get('/api/fixtures/test').expect(404);
});

it('returns 404 if no clubid passed', async () => {
  await request(app).get('/api/fixtures').expect(404);
});
