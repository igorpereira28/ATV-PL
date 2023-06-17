import React, { useState } from "react";

export default function PaginaInicial(props) {
  const [exibirSubitens, setExibirSubitens] = useState({
    Clientes: false,
    Produtos: false,
    Serviços: false,
    Pets: false,
  });

  const handleMouseEnter = (item) => {
    setExibirSubitens((prevState) => ({
      ...prevState,
      [item]: true,
    }));
  };

  const handleMouseLeave = (item) => {
    setExibirSubitens((prevState) => ({
      ...prevState,
      [item]: false,
    }));
  };

  const { tema, seletorView } = props;

  return (
    <div className="container">
      <h1 className="text-center">Seja Bem Vindo</h1>
      <div className="d-flex justify-content-center">
        <div
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("Clientes")}
          onMouseLeave={() => handleMouseLeave("Clientes")}
        >
          <button
            className="btn btn-outline-secondary dropdown-toggle me-2"
            style={{ background: tema }}
            type="button"
            id="dropdownMenuButtonClientes"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={exibirSubitens["Clientes"]}
          >
            Clientes
          </button>
          <div
            className={`dropdown-menu${
              exibirSubitens["Clientes"] ? " show" : ""
            }`}
            aria-labelledby="dropdownMenuButtonClientes"
          >
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => seletorView("Clientes", e)}
            >
              Lista de Clientes
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => seletorView("Cadastro Cliente", e)}
            >
              Cadastrar Cliente
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) =>
                seletorView("Clientes que mais consumiram produtos", e)
              }
            >
              Clientes que mais consumiram produtos
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) =>
                seletorView("Clientes que mais consumiram serviços", e)
              }
            >
              Clientes que mais consumiram serviços
            </a>
          </div>
        </div>
        <div
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("Produtos")}
          onMouseLeave={() => handleMouseLeave("Produtos")}
        >
          <button
            className="btn btn-outline-secondary dropdown-toggle me-2"
            style={{ background: tema }}
            type="button"
            id="dropdownMenuButtonProdutos"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={exibirSubitens["Produtos"]}
          >
            Produtos
          </button>
          <div
            className={`dropdown-menu${
              exibirSubitens["Produtos"] ? " show" : ""
            }`}
            aria-labelledby="dropdownMenuButtonProdutos"
          >
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => seletorView("Produtos", e)}
            >
              Lista de Produtos
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => seletorView("Cadastro Produto", e)}
            >
              Cadastrar Produto
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => seletorView("Produtos mais consumidos", e)}
            >
              Produtos mais consumidos
            </a>
          </div>
        </div>
        <div
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("Serviços")}
          onMouseLeave={() => handleMouseLeave("Serviços")}
        >
          <button
            className="btn btn-outline-secondary dropdown-toggle me-2"
            style={{ background: tema }}
            type="button"
            id="dropdownMenuButtonServiços"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={exibirSubitens["Serviços"]}
          >
            Serviços
          </button>
          <div
            className={`dropdown-menu${
              exibirSubitens["Serviços"] ? " show" : ""
            }`}
            aria-labelledby="dropdownMenuButtonServiços"
          >
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => seletorView("Serviços", e)}
            >
              Lista de Serviços
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => seletorView("Cadastro Serviço", e)}
            >
              Cadastrar Serviço
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => seletorView("Serviços mais contratados", e)}
            >
              Serviços mais contratados
            </a>
          </div>
        </div>
        <div
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("Pets")}
          onMouseLeave={() => handleMouseLeave("Pets")}
        >
          <button
            className="btn btn-outline-secondary dropdown-toggle me-2"
            style={{ background: tema }}
            type="button"
            id="dropdownMenuButtonPets"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={exibirSubitens["Pets"]}
          >
            Pets
          </button>
          <div
            className={`dropdown-menu${exibirSubitens["Pets"] ? " show" : ""}`}
            aria-labelledby="dropdownMenuButtonPets"
          >
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => seletorView("Pets", e)}
            >
              Lista de Pets
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => seletorView("Cadastro Pet", e)}
            >
              Cadastrar Pet
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => seletorView("Pets mais atendidos", e)}
            >
              Pets mais atendidos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}