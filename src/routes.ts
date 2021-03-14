import { Router } from 'express';
import { ProprietarioController } from './controllers/ProprietarioController';

const router = Router();

const proprietarioController = new ProprietarioController();
router.get('/proprietarios', proprietarioController.index);
router.post('/proprietarios', proprietarioController.store);

export { router }