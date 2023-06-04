import express from 'express';
import { createWorker } from '../controllers/worker.js';

const router = express.Router();

router.post('/',createWorker);

export default router;