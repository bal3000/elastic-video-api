import { Client } from '@elastic/elasticsearch';
import express from 'express';
import 'express-async-errors';

import { getFixturesRouter } from './fixtures/routes/get-fixtures';
import { createSequencesRouter } from './sequences/routes/get-sequences';
import { getVideoRouter } from './vod/routes/get-video';

const client = new Client({ node: '' });

const app = express();
app.use(express.json());

app.use(getFixturesRouter);
app.use(createSequencesRouter(client));
app.use(getVideoRouter);

app.all('*', (req, res) => {
  res.sendStatus(404);
});

export default app;
