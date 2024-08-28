import express from 'express';
import { createReading } from '../controller/Reader';

const router = express.Router();

router.post('/upload', createReading);

export default router;
