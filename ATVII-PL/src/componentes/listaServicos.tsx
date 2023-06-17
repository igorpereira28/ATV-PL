/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { MouseEvent } from "react";

type Props = {
  tema: string;
  abrirAtualizarServico: (evento: MouseEvent<HTMLButtonElement>) => void;
};

const ListaServico: React.FC<Props> = ({ tema, abrirAtualizarServico }) => {
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
              <td>Serviço 1</td>
              <td>10.99</td>
              <td>
              <button
                className="btn btn-primary btn-sm mr-2"
                style={{ marginRight: '2cm' }}
                onClick={abrirAtualizarServico}
              >                     
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Serviço 2</td>
              <td>19.99</td>
              <td>
              <button
                className="btn btn-primary btn-sm mr-2"
                style={{ marginRight: '2cm' }}
                onClick={abrirAtualizarServico}
              >                     
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Serviço 3</td>
              <td>10.99</td>
              <td>
              <button
                className="btn btn-primary btn-sm mr-2"
                style={{ marginRight: '2cm' }}
                onClick={abrirAtualizarServico}
              >                     
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Serviço 4</td>
              <td>10.99</td>
              <td>
              <button
                className="btn btn-primary btn-sm mr-2"
                style={{ marginRight: '2cm' }}
                onClick={abrirAtualizarServico}
              >                     
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Serviço 5</td>
              <td>10.99</td>
              <td>
              <button
                className="btn btn-primary btn-sm mr-2"
                style={{ marginRight: '2cm' }}
                onClick={abrirAtualizarServico}
              >                     
                  Atualizar
                </button>
                <button className="btn btn-danger btn-sm">
                  Deletar
                </button>
              </td>
            </tr>
            <tr>
              <td>Serviço 6</td>
              <td>10.99</td>
              <td>
              <button
                className="btn btn-primary btn-sm mr-2"
                style={{ marginRight: '2cm' }}
                onClick={abrirAtualizarServico}
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
export default ListaServico;