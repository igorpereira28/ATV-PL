import { Router } from 'express';
import PetController from '../controllers/petController';

const router = Router();

router.get("/listar", PetController.listarPet);
router.get("/listar/:idPet", PetController.procurarPet);
router.post('/cadastrarPet', PetController.cadastrarPet);
router.delete("/deletar/:idPet", PetController.deletarPet);
router.put("/atualizarPet/:idPet", PetController.atualizarPet);

export default router;