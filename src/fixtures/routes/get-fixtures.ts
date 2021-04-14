import express, { Request, Response } from 'express';
import { param } from 'express-validator';
import axios from 'axios';

import { MatchWrapper } from '../models/match-wrapper';
import { validateRequest } from '../../middlewares/validate-request';

const router = express.Router();

// Get all
router.get(
  '/api/fixtures/:clubId',
  param('clubId').not().isEmpty().withMessage('Please provide a clubId'),
  validateRequest,
  async (req: Request, res: Response) => {
    try {
      const clubId = req.params['clubId'];
      const { data } = await axios.get<MatchWrapper>(
        `?_rt=b&_fmt=json&ctst=${clubId}&live=yes`
      );

      if (!data || data.match.length === 0) {
        res.sendStatus(404);
        return;
      }

      res.send(data.match);
    } catch (err) {
      if (err.response.status && err.response.status === 404) {
        return res.sendStatus(404);
      } else {
        console.log(err);
        return res.sendStatus(500);
      }
    }
  }
);

export { router as getFixturesRouter };
