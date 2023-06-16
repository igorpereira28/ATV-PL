import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AtualizarCliente from "../negocio/atualizarCliente";
import AtualizarPet from "../negocio/atualizarPet";
import AtualizarProduto from "../negocio/atualizarProduto";
import AtualizarServico from "../negocio/atualizarServico";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroPet from "../negocio/cadastroPet";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroProdutoConsumido from "../negocio/cadastroProdutosConsumidos";
import CadastroServico from "../negocio/cadastroServico";
import CadastroServicoConsumido from "../negocio/cadastroServicosConsumidos";
import ExcluirCliente from "../negocio/deletarCliente";
import DeletarCliente from "../negocio/deletarCliente";
import ExcluirPet from "../negocio/deletarPet";
import ExcluirProduto from "../negocio/deletarProduto";
import DeletarProduto from "../negocio/deletarProduto";
import ExcluirServico from "../negocio/deletarServico";
import DeletarServico from "../negocio/deletarServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemPet from "../negocio/listagemPet";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemProdutosConsumidos from "../negocio/listagemProdutosConsumidos";
import ListagemServicos from "../negocio/listagemServicos";
import ListagemServicosConsumidos from "../negocio/listagemServicosConsumidos";
import SelecionadorCliente from "../negocio/selecionadorCliente";
import SelecionadorPet from "../negocio/selecionadorPet";
import SelecionadorProduto from "../negocio/selecionadorProduto";
import SelecionadorServico from "../negocio/selecionadorServico";
import ListagemTelefone from "../negocio/listagemTelefone";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";

const clientesCadastrados: Cliente[] = [];

    // Cliente 1
    const cliente1 = new Cliente("João Silva", "", new CPF("1", new Date("2020-01-01")));
    empresa.getClientes.push(cliente1)


    // Cliente 2
    const cliente2 = new Cliente("Maria Santos", "", new CPF("2", new Date("2020-01-01")));
    empresa.getClientes.push(cliente2)


    // Cliente 3
    const cliente3 = new Cliente("Pedro Oliveira", "", new CPF("3", new Date("2020-01-01")));
    empresa.getClientes.push(cliente3)


    // Cliente 4
    const cliente4 = new Cliente("Ana Santos", "", new CPF("4", new Date("2020-01-01")));
    empresa.getClientes.push(cliente4)


    // Cliente 5
    const cliente5 = new Cliente("Lucas Souza", "", new CPF("5", new Date("2020-01-01")));
    empresa.getClientes.push(cliente5)


    // Cliente 6
    const cliente6 = new Cliente("Juliana Oliveira", "", new CPF("6", new Date("2020-01-01")));
    empresa.getClientes.push(cliente6)


    // Cliente 7
    const cliente7 = new Cliente("Carlos Silva", "", new CPF("7", new Date("2020-01-01")));
    empresa.getClientes.push(cliente7)


    // Cliente 8
    const cliente8 = new Cliente("Mariana Costa", "", new CPF("8", new Date("2020-01-01")));
    empresa.getClientes.push(cliente8)


    // Cliente 9
    const cliente9 = new Cliente("Rafaela Santos", "", new CPF("9", new Date("2020-01-01")));
    empresa.getClientes.push(cliente9)


    // Cliente 10
    const cliente10 = new Cliente("Gustavo Lima", "", new CPF("10", new Date("2020-01-01")));
    empresa.getClientes.push(cliente10)


    // Cliente 11
    const cliente11 = new Cliente("Patricia Almeida", "", new CPF("11", new Date("2020-01-01")));
    empresa.getClientes.push(cliente11)


    // Cliente 12
    const cliente12 = new Cliente("Fernando Oliveira", "", new CPF("12", new Date("2020-01-01")));
    empresa.getClientes.push(cliente12)


    // Cliente 13
    const cliente13 = new Cliente("Camila Costa", "", new CPF("13", new Date("2020-01-01")));
    empresa.getClientes.push(cliente13)


    // Cliente 14
    const cliente14 = new Cliente("Rodrigo Santos", "", new CPF("14", new Date("2020-01-01")));
    empresa.getClientes.push(cliente14)

    // Cliente 15
    const cliente15 = new Cliente("Amanda Lima", "", new CPF("15", new Date("2020-01-01")));
    empresa.getClientes.push(cliente15)

    export default clientesCadastrados;

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
    console.log(`17 - Cadastrar produto consumido`);
    console.log(`18 - Listar produtos consumidos`);
    console.log(`21 - Cadastrar serviço consumido`);
    console.log(`22 - Listar serviços consumidos`);
    console.log(`25 - Listagem dos clientes que mais consumiram produtos em quantidade`);
    console.log(`26 - Listagem dos clientes que mais consumiram serviços em quantidade`);
    console.log(`27 - Listagem dos produtos mais consumidos`);
    console.log(`28 - Listagem dos serviços mais consumidos`);
    console.log(`29 - Listagem dos produtos mais consumidos por tipo e raça de pets.`)
    console.log(`30 - Listagem dos serviços mais consumidos por tipo e raça de pets.`)
    console.log(`31 - Listagem dos 5 clientes que mais consumiram em valor, não em quantidade`)
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
            let procurarCliente = entrada.receberTexto(`Por favor, digite número cpf do cliente para atualizar: `)
            let atualizarCliente = new AtualizarCliente(empresa.getClientes, empresa.getTelefones)
            atualizarCliente.atualizar(procurarCliente)
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
            let procurarProduto = entrada.receberTexto(`Por favor, digite o nome do produto para atualizar: `)
            let atuProduto = selecionarProduto.selecionar(procurarProduto)
            let novoNomeProduto = entrada.receberTexto(`Por favor informe o novo nome do produto: `)
            let novoValorProduto = entrada.receberNumero(`Por favor informe o novo valor do serviço: `)
            let atualizarProduto = new AtualizarProduto(empresa.getProdutos)
            atualizarProduto.atualizar(atuProduto, novoNomeProduto, novoValorProduto)
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
            let novoValorServico = entrada.receberNumero(`Por favor informe o novo nome do serviço: `)
            let atualiServico = new AtualizarServico(empresa.getServicos)
            atualiServico.atualizar(atuServico, novoNomeServico, novoValorServico)
            break;
        case 12:
            let selecionadorServico = new SelecionadorServico(empresa.getServicos)
            let nomeServico = entrada.receberTexto(`Por favor, digite o nome do serviço para excluir: `)
            let servico = selecionadorServico.selecionar(nomeServico)
            let excluidorServico = new ExcluirServico(empresa.getServicos)
            excluidorServico.excluir(servico)
            break;
        case 13:
            let cadastroPet = new CadastroPet(empresa.getClientes, empresa.getPets)
            cadastroPet.cadastrar()
            break;
        case 14:
            let listagemPet = new ListagemPet(empresa.getPets, empresa.getClientes)
            listagemPet.listar()
            break;

        case 15:
            let procurarResponsavelPet = entrada.receberTexto(`Por favor, digite o CPF do cliente para atualizar o pet: `);
            let atualizarPet = new AtualizarPet(empresa.getClientes, empresa.getPets);
            atualizarPet.atualizar(procurarResponsavelPet);
            break;
        case 16:
            let excluidorPet = new ExcluirPet(empresa.getClientes, empresa.getPets)
            excluidorPet.excluir()
            break;

        case 17:
            let listagemProduto1 = new ListagemProdutos(empresa.getProdutos)
            listagemProduto1.listar()
            let verificarProduto = new SelecionadorProduto(empresa.getProdutos)
            let verificarCliente = new SelecionadorCliente(empresa.getClientes)
            let opcaoProduto = entrada.receberTexto(`Por favor, digite o nome de uma das opções do produto fornecido: `)
            let opcaoCliente = entrada.receberTexto(`Por favor, digite o cpf do responsável do pet: `)
            let opcaoPetProduto = entrada.receberTexto(`Por favor, digite o nome do pet: `)
            let procurarProduto1 = verificarProduto.selecionar(opcaoProduto)
            let procurarCliente1 = verificarCliente.selecionar(opcaoCliente)
            let verificarPetProduto = new SelecionadorPet(empresa.getClientes, empresa.getPets)
            let procurarPetProduto1 = verificarPetProduto.selecionar(opcaoCliente, opcaoPetProduto)
            let quantidade = entrada.receberNumero(`Por favor, digite a quantidade: `)
            let cadastroProdutoConsumido = new CadastroProdutoConsumido(empresa.getClientes, empresa.getProdutos, empresa.getPets, empresa.getProdutosConsumidos)
            cadastroProdutoConsumido.cadastrar(procurarCliente1, procurarProduto1,procurarPetProduto1, quantidade)
            break;

        case 18:
            let listagemProdutoConsumido = new ListagemProdutosConsumidos(empresa.getClientes, empresa.getProdutosConsumidos, empresa.getPets)
            listagemProdutoConsumido.listar()
            break;

        case 19:
            let listagemServico1 = new ListagemServicos(empresa.getServicos)
            listagemServico1.listar()
            let verificarServico = new SelecionadorServico(empresa.getServicos)
            let verificarClienteServico = new SelecionadorCliente(empresa.getClientes)
            let verificarPet = new SelecionadorPet(empresa.getClientes, empresa.getPets)
            let opcaoServico = entrada.receberTexto(`Por favor, digite o nome de uma das opções do serviço fornecido: `)
            let opcaoClienteServico = entrada.receberTexto(`Por favor, digite o cpf do responsável do pet: `)
            let opcaoPet = entrada.receberTexto(`Por favor, digite o nome do pet que receberá o serviço: `)
            let procurarServico1 = verificarServico.selecionar(opcaoServico)
            let procurarClienteServico1 = verificarClienteServico.selecionar(opcaoClienteServico)
            let procurarPet1 = verificarPet.selecionar(opcaoClienteServico, opcaoPet)
            let opcaoQuantidade = entrada.receberNumero(`Por favor, digite a quantidade de serviço fornecido: `)
            let cadastroServicoConsumido = new CadastroServicoConsumido(empresa.getClientes, empresa.getServicos, empresa.getPets, empresa.getServicosConsumidos)
            cadastroServicoConsumido.cadastrar(procurarClienteServico1, procurarPet1, procurarServico1, opcaoQuantidade)
            break;

        case 20:
            let listagemServicoConsumido = new ListagemServicosConsumidos(empresa.getClientes, empresa.getPets, empresa.getServicosConsumidos)
            listagemServicoConsumido.listar()
            break;  

        case 21:
            const listagemProdutosConsumidos = new ListagemProdutosConsumidos(empresa.getClientes, empresa.getProdutosConsumidos, empresa.getPets);
            listagemProdutosConsumidos.listarClientesMaisConsumiram();
            break;

        case 22:
            const listagemServicosConsumidos = new ListagemServicosConsumidos(empresa.getClientes, empresa.getPets, empresa.getServicosConsumidos);
            listagemServicosConsumidos.listarClientesMaisConsumiram();
            break;

        case 23:
            const listagemProdutosMaisConsumidos = new ListagemProdutosConsumidos(empresa.getClientes, empresa.getProdutosConsumidos, empresa.getPets);
            listagemProdutosMaisConsumidos.listarProdutosMaisConsumidos();
            break;

        case 24:
            const listagemServicosMaisConsumidos = new ListagemServicosConsumidos(empresa.getClientes, empresa.getPets, empresa.getServicosConsumidos);
            listagemServicosMaisConsumidos.listarServicosMaisConsumidos();
            break;

        case 25:
            const listagemMaisConsumiramValor = new ListagemProdutosConsumidos(empresa.getClientes, empresa.getProdutosConsumidos, empresa.getPets);
            listagemMaisConsumiramValor.listarClientesMaisConsumiramValor();
            break;

        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}