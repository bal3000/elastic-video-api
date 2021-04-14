import request from 'supertest';

import app from '../../../app';

it('returns the correct sequence for the goal event', async () => {
  const { body: sequences } = await request(app)
    .post('/api/sequences/8uqqwq272q9jpf0psmgy5iqz8')
    .send({
      eventIds: ['2276375899'],
    })
    .expect(200);

  expect(sequences.seqNumbers.length).toBeGreaterThan(0);
  expect(sequences.seqNumbers[0]).toEqual(162);
});
