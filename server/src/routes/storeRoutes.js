import express from 'express';
import storeController from '../controllers/storeController.js';

const router = express.Router();

router.post('/skins', storeController.getDailySkins);

export default router;