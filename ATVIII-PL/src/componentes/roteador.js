/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaProduto from "./listaProduto";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaServico from "./listaServico";
import FormularioCadastroServico from "./formularioCadastroServico";
import ListaPet from "./listaPet";
import FormularioCadastroPet from "./formularioCadastroPet";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {
        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastro Cliente', 'Produtos', 'Cadastro Produto', 'Serviços', 'Cadastro Serviço', 'Pets', 'Cadastro Pet']} />
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Cadastro Cliente') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastro Cliente', 'Produtos', 'Cadastro Produto', 'Serviços', 'Cadastro Serviço', 'Pets', 'Cadastro Pet']} />
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Produtos') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastro Cliente', 'Produtos', 'Cadastro Produto', 'Serviços', 'Cadastro Serviço', 'Pets', 'Cadastro Pet']} />
                    <ListaProduto tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Cadastro Produto') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastro Cliente', 'Produtos', 'Cadastro Produto', 'Serviços', 'Cadastro Serviço', 'Pets', 'Cadastro Pet']} />
                    <FormularioCadastroProduto tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Serviços') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastro Cliente', 'Produtos', 'Cadastro Produto', 'Serviços', 'Cadastro Serviço', 'Pets', 'Cadastro Pet']} />
                    <ListaServico tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Cadastro Serviço') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastro Cliente', 'Produtos', 'Cadastro Produto', 'Serviços', 'Cadastro Serviço', 'Pets', 'Cadastro Pet']} />
                    <FormularioCadastroServico tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Pets') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastro Cliente', 'Produtos', 'Cadastro Produto', 'Serviços', 'Cadastro Serviço', 'Pets', 'Cadastro Pet']} />
                    <ListaPet tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Cadastro Pet') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastro Cliente', 'Produtos', 'Cadastro Produto', 'Serviços', 'Cadastro Serviço', 'Pets', 'Cadastro Pet']} />
                    <FormularioCadastroPet tema="#e3f2fd" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}