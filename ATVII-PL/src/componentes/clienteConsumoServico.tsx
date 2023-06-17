/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

type ClienteConsumoServicoProps = {
  tema: string;
};

export default class ClienteConsumoServico extends Component<ClienteConsumoServicoProps> {
  render() {
    const { tema } = this.props;

    const dados = [
      { nome: "Cliente 1", quantidadeConsumida: 10, servico: "Serviço 1" },
      { nome: "Cliente 2", quantidadeConsumida: 5, servico: "Serviço 1" },
      { nome: "Cliente 3", quantidadeConsumida: 8, servico: "Serviço 2" },
      { nome: "Cliente 4", quantidadeConsumida: 10, servico: "Serviço 1" },
      { nome: "Cliente 5", quantidadeConsumida: 5, servico: "Serviço 1" },
      { nome: "Cliente 6", quantidadeConsumida: 8, servico: "Serviço 2" },
      { nome: "Cliente 7", quantidadeConsumida: 10, servico: "Serviço 1" },
      { nome: "Cliente 8", quantidadeConsumida: 5, servico: "Serviço 1" },
      { nome: "Cliente 9", quantidadeConsumida: 8, servico: "Serviço 2" },
      { nome: "Cliente 10", quantidadeConsumida: 8, servico: "Serviço 2" },
    ];

    return (
      <div>
        <h2>Clientes que mais consumiram serviços:</h2>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Nome</th>
              <th>Quantidade de Serviço Consumida</th>
              <th>Serviço</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((item, index) => (
              <tr key={index}>
                <td>{item.nome}</td>
                <td>{item.quantidadeConsumida}</td>
                <td>{item.servico}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}