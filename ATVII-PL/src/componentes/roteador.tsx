import React, { Component, MouseEvent } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaProduto from "./listaProdutos";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaServico from "./listaServicos";
import FormularioCadastroServico from "./formularioCadastroServico";
import ListaPet from "./listaPets";
import FormularioCadastroPet from "./formularioCadastroPet";
import PaginaInicial from "./paginaInicial";
import FormularioAtualizarCliente from "./formularioAtualizarCliente";
import FormularioAtualizarProduto from "./formularioAtualizarProduto";
import FormularioAtualizarServico from "./formularioAtualizarServico";
import FormularioAtualizarPet from "./formularioAtualizarPet";
import ClienteConsumoProduto from "./clienteConsumoProduto";
import ClienteConsumoServico from "./clienteConsumoServico";
import ProdutosMaisConsumidos from "./produtosMaisConsumidos";
import ServicosMaisConsumidos from "./servicosMaisConsumidos";
import ProdutoRacaePet from "./produtoRacaePet";
import ServicoRacaePet from "./servicoRacaePet";
import MaisGastaram from "./maisGastaram";

type State = {
  tela: string;
};

type Props = {};

export default class Roteador extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tela: "Home",
    };
    this.selecionarView = this.selecionarView.bind(this);
  }

  selecionarView(novaTela: string, evento: MouseEvent) {
    evento.preventDefault();
    console.log(novaTela);
    this.setState({
      tela: novaTela,
    });
  }

  abrirAtualizarCliente = (evento: MouseEvent<HTMLButtonElement>) => {
    this.selecionarView("Atualizar Cliente", evento);
  };

  abrirAtualizarProduto = (evento: MouseEvent<HTMLButtonElement>) => {
    this.selecionarView("Atualizar Produto", evento);
  };

  abrirAtualizarServico = (evento: MouseEvent<HTMLButtonElement>) => {
    this.selecionarView("Atualizar Serviço", evento);
  };

  abrirAtualizarPet = (evento: MouseEvent<HTMLButtonElement>) => {
    this.selecionarView("Atualizar Pet", evento);
  };

  render() {
    let barraNavegacao = (
      <BarraNavegacao
        seletorView={this.selecionarView}
        tema="#e3f2fd"
        botoes={["Clientes", "Produtos", "Serviços", "Pets", "Cadastros", "Listagens"]}
      />
    );

    if (this.state.tela === "Clientes") {
      return (
        <>
          {barraNavegacao}
          <ListaCliente
            tema="#e3f2fd"
            abrirAtualizarCliente={this.abrirAtualizarCliente}
          />
        </>
      );
    } else if (this.state.tela === "Cadastro Cliente") {
      return (
        <>
          {barraNavegacao}
          <FormularioCadastroCliente tema="#e3f2fd" />
        </>
      );
    } else if (this.state.tela === "Produtos") {
      return (
        <>
          {barraNavegacao}
          <ListaProduto
            tema="#e3f2fd"
            abrirAtualizarProduto={this.abrirAtualizarProduto}
          />
        </>
      );
    } else if (this.state.tela === "Cadastro Produto") {
      return (
        <>
          {barraNavegacao}
          <FormularioCadastroProduto tema="#e3f2fd" />
        </>
      );
    } else if (this.state.tela === "Serviços") {
      return (
        <>
          {barraNavegacao}
          <ListaServico
            tema="#e3f2fd"
            abrirAtualizarServico={this.abrirAtualizarServico}
          />
        </>
      );
    } else if (this.state.tela === "Cadastro Serviço") {
      return (
        <>
          {barraNavegacao}
          <FormularioCadastroServico tema="#e3f2fd" />
        </>
      );
    } else if (this.state.tela === "Pets") {
      return (
        <>
          {barraNavegacao}
          <ListaPet
            tema="#e3f2fd"
            abrirAtualizarPet={this.abrirAtualizarPet}
          />
        </>
      );
    } else if (this.state.tela === "Cadastro Pet") {
      return (
        <>
          {barraNavegacao}
          <FormularioCadastroPet tema="#e3f2fd" />
        </>
      );
    } else if (this.state.tela === "Home") {
      return (
        <>
          {barraNavegacao}
          <PaginaInicial
            tema="#e3f2fd"
            seletorView={this.selecionarView}
          />
        </>
      );
    } else if (this.state.tela === "Atualizar Cliente") {
      return (
        <>
          {barraNavegacao}
          <FormularioAtualizarCliente tema="#e3f2fd" />
        </>
      );
    } else if (this.state.tela === "Atualizar Produto") {
      return (
        <>
          {barraNavegacao}
          <FormularioAtualizarProduto tema="#e3f2fd" />
        </>
      );
    } else if (this.state.tela === "Atualizar Serviço") {
      return (
        <>
          {barraNavegacao}
          <FormularioAtualizarServico tema="#e3f2fd" />
        </>
      );
    } else if (this.state.tela === "Atualizar Pet") {
      return (
        <>
          {barraNavegacao}
          <FormularioAtualizarPet tema="#e3f2fd" />
        </>
      );
    } else if (this.state.tela === "Clientes que mais consumiram produtos") {
      return (
        <>
          {barraNavegacao}
          <ClienteConsumoProduto tema="#e3f2fd" />
        </>
      );
    } else if (this.state.tela === "Clientes que mais consumiram serviços") {
      return (
        <>
          {barraNavegacao}
          <ClienteConsumoServico tema="#e3f2fd" />
        </>
      );
    } else if (this.state.tela === "Produtos mais consumidos") {
      return (
        <>
          {barraNavegacao}
          <ProdutosMaisConsumidos tema="#e3f2fd" />
        </>
      );
    } else if (this.state.tela === "Serviços mais consumidos") {
      return (
        <>
          {barraNavegacao}
          <ServicosMaisConsumidos tema="#e3f2fd" />
        </>
      );
    } else if (this.state.tela === "Produtos mais consumidos por tipo e raça de pets") {
      return (
        <>
          {barraNavegacao}
          <ProdutoRacaePet tema="#e3f2fd" />
        </>
      );
    } else if (this.state.tela === "Serviços mais consumidos por tipo e raça de pets") {
      return (
        <>
          {barraNavegacao}
          <ServicoRacaePet tema="#e3f2fd" />
        </>
      );
    } else if (this.state.tela === "Top 5 clientes que mais gastaram") {
      return (
        <>
          {barraNavegacao}
          <MaisGastaram tema="#e3f2fd" />
        </>
      );
    }
  }
}