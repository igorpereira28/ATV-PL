import express from 'express';
import conexao from '../db/conexao';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Router } from 'express';

const app = express();

// Middleware de exemplo
app.use(express.json());

// Configuração do CORS
app.use(cors());
// Body Parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Chamando Inputs do Banco de Dados
import Cliente from '../modelo/cliente';
import Pet from '../modelo/pet';
import Produto from '../modelo/produto';
import Servico from '../modelo/servico';
import RG from '../modelo/rg';
import Telefone from '../modelo/telefone';

// Rotas - invocando depois usando a rota
import ClienteRotas from '../routes/clienteRoutes';
import PetRotas from '../routes/petRoutes';
import ProdutoRotas from '../routes/produtoRoutes';
import ServicoRotas from '../routes/servicoRoutes';

app.use(cors({ credentials: true, origin: 'http://localhost:5173'}))


// Usando Rotas
app.use('/cliente', ClienteRotas);
app.use('/pet', PetRotas);
app.use('/produto', ProdutoRotas);
app.use('/servico', ServicoRotas);

// Conexao com Banco de Dados
conexao.sync().then(() => {
  app.listen(3000, () => {
    console.log('Backend server is running on port 3000');
  });
}).catch(erro => {
  console.log('Deu erro: ', erro);
});