import { Router } from 'express';
import * as BruxoController from './../controllers/bruxoController.js'

const router = Router();

router.get("/", BruxoController.listarTodos);



export default router;