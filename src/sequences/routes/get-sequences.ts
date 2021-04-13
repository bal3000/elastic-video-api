import { ApiResponse, Client } from '@elastic/elasticsearch';
import express, { Request, Response, Router } from 'express';
import { body, param } from 'express-validator';

import { validateRequest } from '../../middlewares/validate-request';
import { SearchResponse } from '../models/search-response';
import { Event } from '../models/event';
import { SeqAggregation } from '../models/seq-agg';

interface RequestBody {
  eventIds: string[];
}

export function createSequencesRouter(client: Client): Router {
  const router = express.Router();

  router.post(
    '/api/sequences/:fixtureId',
    body('eventIds')
      .isArray({ min: 1 })
      .withMessage('Please provide at least one eventId'),
    param('fixtureId')
      .not()
      .isEmpty()
      .withMessage('Please provide a fixtureId'),
    validateRequest,
    async (req: Request, res: Response) => {
      const fixtureId = req.params['fixtureId'];
      const { eventIds }: RequestBody = req.body;

      const goalSeq = eventIds.map((id) => {
        return {
          term: {
            'sequence.endEventId': {
              value: id,
            },
          },
        };
      });

      const result: ApiResponse<
        SearchResponse<Event, SeqAggregation>
      > = await client.search({
        index: 'events_r',
        body: {
          query: {
            bool: {
              filter: [
                {
                  term: {
                    'match.uuid': {
                      value: fixtureId,
                    },
                  },
                },
                ...goalSeq,
              ],
            },
          },
          aggs: {
            seqNumbers: {
              terms: {
                field: 'sequence.number',
              },
            },
          },
        },
      });

      if (!result || !result.body || !result.body.aggregations) {
        res.status(404).send('Not Found');
        return;
      }

      const { buckets } = result.body.aggregations.seqNumbers;
      const seqIds = buckets.map((b) => b.key);

      res.send({ seqNumbers: seqIds });
    }
  );

  return router;
}
