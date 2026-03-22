import { Router } from 'express';
import { getParques } from '../controllers/parquesController';

const router = Router();

router.get('/', getParques);

export default router;
