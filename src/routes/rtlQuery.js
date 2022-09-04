import express from 'express';
import RTLQueryController from '../controllers/rtlquery';

const router = express.Router();
router.get('/', RTLQueryController);

export default router;
