import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AtualizarCliente from "../negocio/atualizarCliente";
import AtualizarProduto from "../negocio/atualizarProduto";
import AtualizarServico from "../negocio/atualizarServico";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroPet from "../negocio/cadastroPet";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ExcluirCliente from "../negocio/deletarCliente";
import DeletarCliente from "../negocio/deletarCliente";
import ExcluirPet from "../negocio/deletarPet";
import ExcluirProduto from "../negocio/deletarProduto";
import DeletarProduto from "../negocio/deletarProduto";
import DeletarServico from "../negocio/deletarServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";
import SelecionadorCliente from "../negocio/selecionadorCliente";
import SelecionadorProduto from "../negocio/selecionadorProduto";
import SelecionadorServico from "../negocio/selecionadorServico";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar cliente`);
    console.log(`4 - Deletar cliente`);
    console.log(`5 - Cadastrar produto`);
    console.log(`6 - Listar todos os produtos`);
    console.log(`7 - Atualizar produto`);
    console.log(`8 - Deletar produto`);
    console.log(`9 - Cadastrar serviço`);
    console.log(`10 - Listar todos os serviços`);
    console.log(`11 - Atualizar serviço`);
    console.log(`12 - Deletar serviço`);
    console.log(`13 - Cadastrar PET`);
    console.log(`14 - Listar todos os pets`);
    console.log(`15 - Atualizar pet`);
    console.log(`16 - Deletar pet`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes, empresa.getRG, empresa.getTelefones)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes, empresa.getRG, empresa.getTelefones, empresa.getPets)
            listagem.listar()
            break;
        case 3:
            let selecionarCliente = new SelecionadorCliente(empresa.getClientes)
            let procurarCliente = entrada.receberTexto(`Por favor, digite número cpf do cliente para atualizar: `)
            let atuCliente = selecionarCliente.selecionar(procurarCliente)
            let novoNomeCliente = entrada.receberTexto(`Por favor informe o novo nome: `)
            let novoNomeSocialCliente = entrada.receberTexto(`Por favor informe o novo nome social: `)
            let atualizarCliente = new AtualizarCliente(empresa.getClientes)
            atualizarCliente.atualizar(atuCliente, novoNomeCliente, novoNomeSocialCliente)
            break;
        case 4:
            let selecionadorCliente = new SelecionadorCliente(empresa.getClientes)
            let cpf = entrada.receberTexto(`Por favor, digite o cpf do cliente para excluir: `)
            let cliente = selecionadorCliente.selecionar(cpf)
            let excluidor = new ExcluirCliente(empresa.getClientes)
            excluidor.excluir(cliente)
            break;

        case 5:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 6:
            let listagemProduto = new ListagemProdutos(empresa.getProdutos)
            listagemProduto.listar()
            break;
        case 7:
            let selecionarProduto = new SelecionadorProduto(empresa.getProdutos)
            let procurarProduto = entrada.receberTexto(`Por favor, digite o nome do serviço para atualizar: `)
            let atuProduto = selecionarProduto.selecionar(procurarProduto)
            let novoNomeProduto = entrada.receberTexto(`Por favor informe o novo nome do serviço: `)
            let atualizarProduto = new AtualizarServico(empresa.getProdutos)
            atualizarProduto.atualizar(atuProduto, novoNomeProduto)
            break;
        case 8:
            let selecionadorProduto = new SelecionadorProduto(empresa.getProdutos)
            let nome = entrada.receberTexto(`Por favor, digite o nome do produto para excluir: `)
            let produto = selecionadorProduto.selecionar(nome)
            let excluidorProduto = new ExcluirProduto(empresa.getProdutos)
            excluidorProduto.excluir(produto)
            break;

        case 9:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 10:
            let listagemServico = new ListagemServicos(empresa.getServicos)
            listagemServico.listar()
            break;
        case 11:
            let atualizarServico = new SelecionadorServico(empresa.getServicos)
            let nomeAtuServico = entrada.receberTexto(`Por favor, digite o nome do serviço para atualizar: `)
            let atuServico = atualizarServico.selecionar(nomeAtuServico)
            let novoNomeServico = entrada.receberTexto(`Por favor informe o novo nome do serviço: `)
            let atualiServico = new AtualizarServico(empresa.getServicos)
            atualiServico.atualizar(atuServico, novoNomeServico)
            break;
        case 12:
            let selecionadorServico = new SelecionadorServico(empresa.getServicos)
            let nomeServico = entrada.receberTexto(`Por favor, digite o nome do serviço para excluir: `)
            let servico = selecionadorServico.selecionar(nomeServico)
            let excluidorServico = new ExcluirProduto(empresa.getServicos)
            excluidorServico.excluir(servico)
            break;
        case 13:
            let cadastroPet = new CadastroPet(empresa.getClientes, empresa.getPets)
            cadastroPet.cadastrar()
            break;

        case 16:
            let excluidorPet = new ExcluirPet(empresa.getClientes, empresa.getPets)
            excluidorPet.excluir()
            break;

        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}