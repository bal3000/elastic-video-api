import { Client } from '@elastic/elasticsearch';
import express from 'express';
import 'express-async-errors';

import { getFixturesRouter } from './fixtures/routes/get-fixtures';
import { createSequencesRouter } from './sequences/routes/get-sequences';

const client = new Client({ node: '' });

const app = express();
app.use(express.json());

app.use(getFixturesRouter);
app.use(createSequencesRouter(client));

app.all('*', (req, res) => {
  res.status(404).send('Not Found');
});

export default app;
