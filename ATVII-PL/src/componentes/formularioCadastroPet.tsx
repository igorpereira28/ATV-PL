import React, { Component, ChangeEvent } from "react";

type Props = {
  tema: string;
};

type State = {
  pets: {
    nome: string;
    tipo: string;
    raca: string;
    genero: string;
  }[];
};

type PetField = "nome" | "tipo" | "raca" | "genero";

export default class FormularioCadastroPet extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pets: [{ nome: "", tipo: "", raca: "", genero: "" }],
    };
  }

  adicionarPet = () => {
    this.setState((prevState) => ({
      pets: [...prevState.pets, { nome: "", tipo: "", raca: "", genero: "" }],
    }));
  };

  handleChangePet = (
    index: number,
    campo: PetField,
    value: string
  ) => {
    this.setState((prevState) => {
      const novosPets = [...prevState.pets];
      novosPets[index][campo] = value;
      return { pets: novosPets };
    });
  };

  render() {
    const { tema } = this.props;
    const { pets } = this.state;

    return (
      <div className="container-fluid">
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Digite o CPF do responsável"
              aria-label="CPF"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary" type="button">
              Buscar
            </button>
          </div>
          {pets.map((pet, index) => (
            <div key={index}>
              <div className="input-group mb-3" key={index}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome do Pet"
                  aria-label="Nome do Pet"
                  aria-describedby="basic-addon1"
                  value={pet.nome}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    this.handleChangePet(index, "nome", e.target.value)
                  }
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Raça"
                  aria-label="Raça"
                  aria-describedby="basic-addon1"
                  value={pet.raca}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    this.handleChangePet(index, "raca", e.target.value)
                  }
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Gênero"
                  aria-label="Gênero"
                  aria-describedby="basic-addon1"
                  value={pet.genero}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    this.handleChangePet(index, "genero", e.target.value)
                  }
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tipo"
                  aria-label="Tipo"
                  aria-describedby="basic-addon1"
                  value={pet.tipo}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    this.handleChangePet(index, "tipo", e.target.value)
                  }
                />
              </div>
            </div>
          ))}
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary"
              type="button"
              style={{ background: tema }}
              onClick={this.adicionarPet}
            >
              Adicionar Pet
            </button>
          </div>
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary"
              type="button"
              style={{ background: tema }}
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}