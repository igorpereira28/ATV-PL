import React, { Component, ChangeEvent } from "react";
import Mascara from "./mascara";

type Props = {
  tema: string;
};

type State = {
  telefones: string[];
  rg: string[];
  cpf: string;
};

export default class FormularioAtualizarCliente extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      telefones: [],
      rg: [],
      cpf: "",
    };
  }

  adicionarTelefone = () => {
    this.setState((prevState) => ({
      telefones: [...prevState.telefones, ""],
    }));
  };

  adicionarRG = () => {
    this.setState((prevState) => ({
      rg: [...prevState.rg, ""],
    }));
  };

  handleChangeTelefone = (index: number, value: string) => {
    if (value.length <= 15) {
      this.setState((prevState) => {
        const novosTelefones = [...prevState.telefones];
        const telefoneFormatado = Mascara.formatarTelefone(value);
        novosTelefones[index] = telefoneFormatado;
        return { telefones: novosTelefones };
      });
    }
  };

  handleChangeRg = (index: number, value: string) => {
    if (value.length <= 12) {
      this.setState((prevState) => {
        const novoRg = [...prevState.rg];
        novoRg[index] = Mascara.formatarRG(value);
        return { rg: novoRg };
      });
    }
  };

  handleChangeCPF = (value: string) => {
    if (value.length <= 11) {
      this.setState({ cpf: Mascara.formatarCPF(value) });
    }
  };

  render() {
    const { tema } = this.props;
    const { telefones, rg } = this.state;

    return (
      <div className="container-fluid">
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Cliente 1"
              aria-label="Nome"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Cliente 1"
              aria-label="Nome social"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span
              className="input-group-text"
              id="basic-addon1"
              style={{ background: tema }}
            >
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="cliente1@gmail.com"
              aria-label="E-mail"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="123.123.123.12"
              aria-label="CPF"
              aria-describedby="basic-addon1"
              value={this.state.cpf}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                this.handleChangeCPF(e.target.value)
              }
            />
          </div>
          {rg.map((rg, index) => (
            <div className="input-group mb-3" key={index}>
              <input
                type="text"
                className="form-control"
                placeholder="RG"
                aria-label="RG"
                aria-describedby="basic-addon1"
                value={rg}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  this.handleChangeRg(index, e.target.value)
                }
              />
            </div>
          ))}
          <button
            className="btn btn-outline-secondary"
            type="button"
            style={{ background: tema }}
            onClick={this.adicionarRG}
          >
            Adicionar RG
          </button>
          {telefones.map((telefone, index) => (
            <div className="input-group mb-3" key={index}>
              <input
                type="text"
                className="form-control"
                placeholder="Telefone"
                aria-label="Telefone"
                aria-describedby="basic-addon1"
                value={telefone}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  this.handleChangeTelefone(index, e.target.value)
                }
              />
            </div>
          ))}
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary"
              type="button"
              style={{ background: tema }}
              onClick={this.adicionarTelefone}
            >
              Adicionar Telefone
            </button>
          </div>
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary"
              type="button"
              style={{ background: tema }}
            >
              Atualizar
            </button>
          </div>
        </form>
      </div>
    );
  }
}