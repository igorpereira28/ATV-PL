import Cliente from "./cliente"

export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private genero: string
    private cliente: Cliente

    constructor(nome: string, raca: string, genero: string, tipo: string, cliente: Cliente) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.cliente = cliente; // Atribui o cliente correspondente
    }

    public get getNome(){return this.nome}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}
    public getCliente(): Cliente {return this.cliente}
}