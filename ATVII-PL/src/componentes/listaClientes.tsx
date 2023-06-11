/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type Props = {
  tema: string;
};

export default class ListaCliente extends Component<Props> {
  render() {
    const { tema } = this.props;

    return (
      <div className="container-fluid">
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between">
            <span>Cliente 1</span>
            <div>
              <button className="btn btn-primary btn-sm mr-2" style={{ marginRight: '2cm' }}>
                Atualizar
              </button>
              <button className="btn btn-danger btn-sm">
                Deletar
              </button>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between">
            <span>Cliente 2</span>
            <div>
              <button className="btn btn-primary btn-sm mr-2" style={{ marginRight: '2cm' }}>
                Atualizar
              </button>
              <button className="btn btn-danger btn-sm">
                Deletar
              </button>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between">
            <span>Cliente 3</span>
            <div>
              <button className="btn btn-primary btn-sm mr-2" style={{ marginRight: '2cm' }}>
                Atualizar
              </button>
              <button className="btn btn-danger btn-sm">
                Deletar
              </button>
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex justify-content-between"
            style={{ backgroundColor: tema }}
          >
            <span>Cliente 4</span>
            <div>
              <button className="btn btn-primary btn-sm mr-2" style={{ marginRight: '2cm' }}>
                Atualizar
              </button>
              <button className="btn btn-danger btn-sm">
                Deletar
              </button>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between">
            <span>Cliente 5</span>
            <div>
              <button className="btn btn-primary btn-sm mr-2" style={{ marginRight: '2cm' }}>
                Atualizar
              </button>
              <button className="btn btn-danger btn-sm">
                Deletar
              </button>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between">
            <span>Cliente 6</span>
            <div>
              <button className="btn btn-primary btn-sm mr-2" style={{ marginRight: '2cm' }}>
                Atualizar
              </button>
              <button className="btn btn-danger btn-sm">
                Deletar
              </button>
            </div>
          </a>
        </div>
      </div>
    );
  }
}