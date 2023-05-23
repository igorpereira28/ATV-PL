import Cliente from "../modelo/cliente";
import RG from "../modelo/rg";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    private rgs: Array<RG>
    constructor(clientes: Array<Cliente>, rgs: Array<RG>) {
        super()
        this.clientes = clientes
        this.rgs = rgs
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            // Encontrar o RG correspondentes ao cliente
            const rgsCliente = this.rgs.filter(rg => rg.getCliente() === cliente);
            rgsCliente.forEach(rg => {
                console.log(`RG: ${rg.getValor}`);
            });

            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}