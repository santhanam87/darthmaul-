import express from 'express';
import ListViewController from '../controllers/listViewController';

const router = express.Router();
router.get('/listView', ListViewController);
router.get('/', (req, res) => {
    res.send({});
});
export default router;
