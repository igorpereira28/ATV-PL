import express, { Request, Response } from 'express';
import conexao from '../db/conexao';

import bodyParser from 'body-parser';
import { Router } from 'express';

const router = Router();

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


const app = express();

// Middleware de exemplo
app.use(express.json());

// Body Parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Usando Rotas
app.use('/cliente', ClienteRotas);
app.use('/pet', PetRotas);
app.use('/produto', ProdutoRotas);
app.use('/servico', ServicoRotas);

// Rota de exemplo
app.get('/', (req: Request, res: Response) => {
  res.send('Olá, mundo!');
});

// Conexao com Banco de Dados
conexao.sync().then(() => {
  app.listen(3000);
}).catch(erro => {
  console.log('Deu erro: ', erro);
});