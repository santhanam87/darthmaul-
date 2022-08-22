import express from 'express';
import concurrentController from '../controllers/concurrentController';

const concurentRouter = express.Router();
concurentRouter.get('/', concurrentController);

export default concurentRouter;
