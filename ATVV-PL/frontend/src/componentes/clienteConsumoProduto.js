import React from "react";

const ClienteConsumoProduto = (props) => {
  const { tema } = props;

  const dados = [
    { nome: "Cliente 1", quantidadeConsumida: 10, produto: "Produto 1" },
    { nome: "Cliente 2", quantidadeConsumida: 5, produto: "Produto 1" },
    { nome: "Cliente 3", quantidadeConsumida: 8, produto: "Produto 2" },
    { nome: "Cliente 4", quantidadeConsumida: 10, produto: "Produto 1" },
    { nome: "Cliente 5", quantidadeConsumida: 5, produto: "Produto 1" },
    { nome: "Cliente 6", quantidadeConsumida: 8, produto: "Produto 2" },
    { nome: "Cliente 7", quantidadeConsumida: 10, produto: "Produto 1" },
    { nome: "Cliente 8", quantidadeConsumida: 5, produto: "Produto 1" },
    { nome: "Cliente 9", quantidadeConsumida: 8, produto: "Produto 2" },
    { nome: "Cliente 10", quantidadeConsumida: 8, produto: "Produto 2" },
  ];

  return (
    <div>
      <h2>Clientes que mais consumiram produtos:</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Nome</th>
            <th>Quantidade de Produto Consumida</th>
            <th>Produto</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.quantidadeConsumida}</td>
              <td>{item.produto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClienteConsumoProduto;