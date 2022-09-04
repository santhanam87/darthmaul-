import express from 'express';
import ListViewController from '../controllers/listViewController';

const router = express.Router();
router.get('/listView', ListViewController);

export default router;
