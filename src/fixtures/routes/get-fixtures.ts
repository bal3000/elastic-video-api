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
        res.status(404).send('Not Found');
        return;
      }

      res.send(data.match);
    } catch (err) {
      console.log(err);
      res.status(500).send('Error occured');
    }
  }
);

export { router as getFixturesRouter };
