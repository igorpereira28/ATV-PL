import Cliente from "./cliente"
import Pet from "./pet";
import Produto from "./produto";

export default class ProdutoConsumido {
    private cliente: Cliente
    private produto: Produto
    private pets: Pet

    constructor(cliente: Cliente, produto: Produto, pets: Pet) {
        this.cliente = cliente; // Atribui o cliente correspondente
        this.produto = produto
        this.pets = pets
    }
    public getCliente(): Cliente {return this.cliente}
    public getProduto(): Produto {return this.produto}
    public getPet(): Pet {return this.pets}
}