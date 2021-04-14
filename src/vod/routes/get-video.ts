import express, { Request, Response } from 'express';
import { param } from 'express-validator';
import axios, { AxiosRequestConfig } from 'axios';

import { validateRequest } from '../../middlewares/validate-request';
import { Videos } from '../models/videos';

const router = express.Router();

router.get(
  '/api/vod/:fixtureId/:sequenceId',
  param('fixtureId')
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage('Please provide a fixtureId'),
  param('sequenceId')
    .isInt({ gt: 0 })
    .withMessage('Please provide at least one sequence'),
  validateRequest,
  async (req: Request, res: Response) => {
    const fixtureId = req.params['fixtureId'];
    const sequenceId = req.params['sequenceId'];
    const apiKey = '';

    try {
      const config: AxiosRequestConfig = {
        headers: {
          APIKey: apiKey,
        },
      };
      // Call vod api here with given values
      const { data } = await axios.get<Videos>(
        `/soccer/${fixtureId}/${sequenceId}/-2/10`,
        config
      );

      if (!data) {
        res.sendStatus(404);
        return;
      }

      res.send(data);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
);

export { router as getVideoRouter };
