import express, { Request, Response } from 'express';
import { body } from 'express-validator';

interface RequestBody {
  fixtureId: string;
  sequences: number[];
}

const router = express.Router();

router.post(
  '/api/vod',
  body('fixtureId')
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage('Please provide a fixtureId'),
  body('sequences')
    .isArray({ min: 1 })
    .withMessage('Please provide at least one sequence'),
  (req: Request, res: Response) => {
    const { fixtureId, sequences }: RequestBody = req.body;
    const apiKey = '';

    // Call vod api here with given values

    res.sendStatus(404);
  }
);

export { router as getVideoRouter };
