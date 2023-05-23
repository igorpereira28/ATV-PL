import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";

export default class AtualizarCliente{
    private entrada: Entrada
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public atualizar(clienteAlvo: Cliente, novoNomeCliente: string, novoNomeSocialCliente: string) {
        this.clientes.forEach((cliente, indice) => {
            if (cliente.getCpf == clienteAlvo.getCpf){
                this.clientes[indice].nome = novoNomeCliente
                this.clientes[indice].nomeSocial = novoNomeSocialCliente
            }
        })
    }
}