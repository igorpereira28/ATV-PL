import { Router } from 'express';
import ServicoController from '../controllers/servicoController';

const router = Router();

//SERVIÕ
router.get("/listar", ServicoController.listarServico);
router.get("/listar/:idServico", ServicoController.procurarServico);
router.post('/cadastrarServico', ServicoController.cadastrarServico);
router.delete("/deletar/:idServico", ServicoController.deletarServico);
router.put("/atualizarCliente/:idServico", ServicoController.atualizarServico);

//SERVIÇO CONSUMIDO
router.get("/listarServicoConsumido", ServicoController.listarServicoConsumido);
router.get("/listarCliente", ServicoController.listarClientesMaisConsumiram);
router.post('/cadastrarServicoConsumido', ServicoController.cadastrarServicoConsumido);
router.get("/listarServicoMaisConsumido", ServicoController.listarServicosMaisConsumidos);
router.get("/listarClienteValor", ServicoController.listarClientesMaisConsumiramValor);
router.get("/listarTipoeRaca", ServicoController.listarServicosMaisConsumidosPorTipoERaca);

export default router;