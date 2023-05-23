import Cliente from "./cliente";

export default class RG {
    private valor: string
    private dataEmissao: Date
    private cliente: Cliente; // Propriedade para armazenar a referência ao cliente
    constructor(valor: string, dataEmissao: Date, cliente: Cliente) {
        this.valor = valor
        this.dataEmissao = dataEmissao
        this.cliente = cliente; // Atribui o cliente correspondente

    }
    public get getValor(): string {
        return this.valor
    }
    public get getDataEmissao(): Date {
        return this.dataEmissao
    }

    public getCliente(): Cliente {
        return this.cliente;
    }
}