import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaProduto from "./listaProduto";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaServico from "./listaServico";
import FormularioCadastroServico from "./formularioCadastroServico";
import ListaPet from "./listaPet";
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

const Roteador = () => {
  const [tela, setTela] = useState("Home");

  const selecionarView = (novaTela, evento) => {
    evento.preventDefault();
    console.log(novaTela);
    setTela(novaTela);
  };

  const abrirAtualizarCliente = (evento) => {
    selecionarView("Atualizar Cliente", evento);
  };

  const abrirAtualizarProduto = (evento) => {
    selecionarView("Atualizar Produto", evento);
  };

  const abrirAtualizarServico = (evento) => {
    selecionarView("Atualizar Serviço", evento);
  };

  const abrirAtualizarPet = (evento) => {
    selecionarView("Atualizar Pet", evento);
  };

  let barraNavegacao = (
    <BarraNavegacao
      seletorView={selecionarView}
      tema="#e3f2fd"
      botoes={["Clientes", "Produtos", "Serviços", "Pets", "Cadastros", "Listagens"]}
    />
  );

  if (tela === "Clientes") {
    return (
      <>
        {barraNavegacao}
        <ListaCliente
          tema="#e3f2fd"
          abrirAtualizarCliente={abrirAtualizarCliente}
        />
      </>
    );
  } else if (tela === "Cadastro Cliente") {
    return (
      <>
        {barraNavegacao}
        <FormularioCadastroCliente tema="#e3f2fd" />
      </>
    );
  } else if (tela === "Produtos") {
    return (
      <>
        {barraNavegacao}
        <ListaProduto
          tema="#e3f2fd"
          abrirAtualizarProduto={abrirAtualizarProduto}
        />
      </>
    );
  } else if (tela === "Cadastro Produto") {
    return (
      <>
        {barraNavegacao}
        <FormularioCadastroProduto tema="#e3f2fd" />
      </>
    );
  } else if (tela === "Serviços") {
    return (
      <>
        {barraNavegacao}
        <ListaServico
          tema="#e3f2fd"
          abrirAtualizarServico={abrirAtualizarServico}
        />
      </>
    );
  } else if (tela === "Cadastro Serviço") {
    return (
      <>
        {barraNavegacao}
        <FormularioCadastroServico tema="#e3f2fd" />
      </>
    );
  } else if (tela === "Pets") {
    return (
      <>
        {barraNavegacao}
        <ListaPet
          tema="#e3f2fd"
          abrirAtualizarPet={abrirAtualizarPet}
        />
      </>
    );
  } else if (tela === "Cadastro Pet") {
    return (
      <>
        {barraNavegacao}
        <FormularioCadastroPet tema="#e3f2fd" />
      </>
    );
  } else if (tela === "Home") {
    return (
      <>
        {barraNavegacao}
        <PaginaInicial
          tema="#e3f2fd"
          seletorView={selecionarView}
        />
      </>
    );
  } else if (tela === "Atualizar Cliente") {
    return (
      <>
        {barraNavegacao}
        <FormularioAtualizarCliente tema="#e3f2fd" />
      </>
    );
  } else if (tela === "Atualizar Produto") {
    return (
      <>
        {barraNavegacao}
        <FormularioAtualizarProduto tema="#e3f2fd" />
      </>
    );
  } else if (tela === "Atualizar Serviço") {
    return (
      <>
        {barraNavegacao}
        <FormularioAtualizarServico tema="#e3f2fd" />
      </>
    );
  } else if (tela === "Atualizar Pet") {
    return (
      <>
        {barraNavegacao}
        <FormularioAtualizarPet tema="#e3f2fd" />
      </>
    );
  } else if (tela === "Clientes que mais consumiram produtos") {
    return (
      <>
        {barraNavegacao}
        <ClienteConsumoProduto tema="#e3f2fd" />
      </>
    );
  } else if (tela === "Clientes que mais consumiram serviços") {
    return (
      <>
        {barraNavegacao}
        <ClienteConsumoServico tema="#e3f2fd" />
      </>
    );
  } else if (tela === "Produtos mais consumidos") {
    return (
      <>
        {barraNavegacao}
        <ProdutosMaisConsumidos tema="#e3f2fd" />
      </>
    );
  } else if (tela === "Serviços mais consumidos") {
    return (
      <>
        {barraNavegacao}
        <ServicosMaisConsumidos tema="#e3f2fd" />
      </>
    );
  } else if (tela === "Produtos mais consumidos por tipo e raça de pets") {
    return (
      <>
        {barraNavegacao}
        <ProdutoRacaePet tema="#e3f2fd" />
      </>
    );
  } else if (tela === "Serviços mais consumidos por tipo e raça de pets") {
    return (
      <>
        {barraNavegacao}
        <ServicoRacaePet tema="#e3f2fd" />
      </>
    );
  } else if (tela === "Top 5 clientes que mais gastaram") {
    return (
      <>
        {barraNavegacao}
        <MaisGastaram tema="#e3f2fd" />
      </>
    );
  }
};

export default Roteador;