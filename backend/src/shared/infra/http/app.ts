import 'reflect-metadata';

import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import { IAppError } from '@core/domain/errors/IAppError';

import { postgresDatabaseSource } from '../typeorm';
import { router } from './routes';

import '@shared/container';

postgresDatabaseSource
  .initialize()
  .then(
    () =>
      process.env.NODE_ENV !== 'test' && console.log('📦 Database connected')
  );

const app = express();
app.use(express.json());

app.use(cors());
app.use(router);

app.use(
  (
    error: IAppError,
    _request: Request,
    response: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
  ) => {
    return response.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
);

export { app };
