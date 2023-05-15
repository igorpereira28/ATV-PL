import Cliente from "../modelo/cliente";
import Atualizar from "./atualizar";

export default class AtualizarCliente extends Atualizar {
    [x: string]: any;
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes
    }

    public atualizar(): void {
        throw new Error("Method not implemented.");
    }
}