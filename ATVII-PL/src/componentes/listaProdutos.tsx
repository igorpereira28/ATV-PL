/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { MouseEvent } from "react";

type Props = {
  tema: string;
  abrirAtualizarProduto: (evento: MouseEvent<HTMLButtonElement>) => void;
};

const ListaProduto: React.FC<Props> = ({ tema, abrirAtualizarProduto }) => {
    return (
      <div className="container-fluid">
        <table className="table table-bordered tabela-curvada">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Produto 1</td>
              <td>10.99</td>
              <td>
              <button
                className="btn btn-primary btn-sm mr-2"
                style={{ marginRight: '2cm' }}
                onClick={abrirAtualizarProduto}
              >                           
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Produto 2</td>
              <td>19.99</td>
              <td>
              <button
                className="btn btn-primary btn-sm mr-2"
                style={{ marginRight: '2cm' }}
                onClick={abrirAtualizarProduto}
              >                           
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Produto 3</td>
              <td>10.99</td>
              <td>
              <button
                className="btn btn-primary btn-sm mr-2"
                style={{ marginRight: '2cm' }}
                onClick={abrirAtualizarProduto}
              >                           
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Produto 4</td>
              <td>10.99</td>
              <td>
              <button
                className="btn btn-primary btn-sm mr-2"
                style={{ marginRight: '2cm' }}
                onClick={abrirAtualizarProduto}
              >                           
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Produto 5</td>
              <td>10.99</td>
              <td>
              <button
                className="btn btn-primary btn-sm mr-2"
                style={{ marginRight: '2cm' }}
                onClick={abrirAtualizarProduto}
              >                           
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Produto 6</td>
              <td>10.99</td>
              <td>
              <button
                className="btn btn-primary btn-sm mr-2"
                style={{ marginRight: '2cm' }}
                onClick={abrirAtualizarProduto}
              >                           
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
export default ListaProduto;