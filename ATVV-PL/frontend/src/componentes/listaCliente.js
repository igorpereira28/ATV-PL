import React, { useEffect, useState } from "react";

const ListaCliente = ({ tema, abrirAtualizarCliente }) => {
  const [clientes, setClientes] = useState([]);

  const handleDelete = () => {
    // Lógica para exclusão de cliente
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/cliente/", {
        method: "GET",
      });
      const data = await response.json();
      setClientes(data);
    } catch (error) {
      console.log("Ocorreu um erro:", error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="list-group">
        {clientes.map((cliente) => (
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex justify-content-between"
            key={cliente.idCliente}
            style={{ backgroundColor: tema }}
          >
            <span>{cliente.nomeCliente}</span>
            <div>
              <button
                className="btn btn-primary btn-sm mr-2"
                style={{ marginRight: '2cm' }}
                onClick={abrirAtualizarCliente}
              >
                Atualizar
              </button>
              <button className="btn btn-danger btn-sm" onClick={handleDelete}>
                Deletar
              </button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ListaCliente;