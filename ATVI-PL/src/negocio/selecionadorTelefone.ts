import Cliente from "../modelo/cliente";
import Telefone from "../modelo/telefone";

export default class SelecionadorTelefone {
  private clientes: Array<Cliente>;
  private telefones: Array<Telefone>;

  constructor(clientes: Array<Cliente>, telefones: Array<Telefone>) {
    this.clientes = clientes;
    this.telefones = telefones;
  }

  public selecionar(cpf: string): Array<Telefone> {
    const telefonesCliente: Array<Telefone> = [];

    this.telefones.forEach((telefone) => {
      if (telefone.getCliente().getCpf.getValor === cpf) {
        telefonesCliente.push(telefone);
      }
    });

    return telefonesCliente;
  }

    // public selecionarPorCliente(cliente: Cliente): Array<Telefone> {
    //     const cpfCliente = cliente.getCpf.getValor;
    //     const telefonesCliente = this.telefones.filter(telefone => telefone.getCliente().getCpf.getValor === cpfCliente);
    //     return telefonesCliente;
    //   }

    public selecionarPorCliente(cliente: Cliente): Array<Telefone> {
        const cpfCliente = cliente.getCpf.getValor;
        var telefonesCliente = this.telefones.filter(function (telefone) {
          return telefone.getCliente().getCpf.getValor === cpfCliente;
        });
        return telefonesCliente;
    }
}