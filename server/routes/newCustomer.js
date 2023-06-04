import express from 'express';
import { createCustomer } from '../controllers/newCustomer.js';

const router = express.Router();

router.post('/',createCustomer);

export default router;