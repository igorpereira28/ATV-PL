import { Router } from 'express';
import ProdutoController from '../controllers/produtoController';

const router = Router();

//PRODUTO
router.get("/listar", ProdutoController.listarProduto);
router.get("/listar/:idProduto", ProdutoController.procurarProduto);
router.post('/cadastrarProduto', ProdutoController.cadastrarProduto);
router.delete("/deletar/:idProduto", ProdutoController.deletarProduto);
router.put("/atualizarCliente/:idProduto", ProdutoController.atualizarProduto);

//PRODUTO CONSUMIDO
router.get("/listarProdutoConsumido", ProdutoController.listarProdutoConsumido);
router.get("/listarCliente", ProdutoController.listarClientesMaisConsumiram);
router.post('/cadastrarProdutoConsumido', ProdutoController.cadastrarProdutoConsumido);
router.get("/listarProdutoMaisConsumido", ProdutoController.listarProdutosMaisConsumidos);
router.get("/listarClienteValor", ProdutoController.listarClientesMaisConsumiramValor);
router.get("/listarTipoeRaca", ProdutoController.listarProdutosMaisConsumidosPorTipoERaca);

export default router;