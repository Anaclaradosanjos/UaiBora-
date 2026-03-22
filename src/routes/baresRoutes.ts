import { Router } from 'express';
import { getBares } from '../controllers/baresController';

const router = Router();

router.get('/', getBares);

export default router;
