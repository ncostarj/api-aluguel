import { Router } from 'express';
import { ProprietarioController } from './controllers/ProprietarioController';
import { InquilinoController } from './controllers/InquilinoController';

const router = Router();

const proprietarioController = new ProprietarioController();
router.get('/proprietarios', proprietarioController.index);
router.post('/proprietarios', proprietarioController.store);


const inquilinoController = new InquilinoController();
router.get('/inquilinos', inquilinoController.index);
router.post('/inquilinos', inquilinoController.store);

export { router }