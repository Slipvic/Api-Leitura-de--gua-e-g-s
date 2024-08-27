import { Router } from 'express';
import multer from 'multer';
import { createReading } from '../controller/Reader';

const router = Router();
const upload = multer({ dest: 'uploads/' });

router.post('/readings', upload.single('meterImage'), createReading);

export default router;
