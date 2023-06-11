import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import ProdutoConsumido from "../modelo/produtoConsumido";
import Listagem from "./listagem";

export default class ListagemProdutosConsumidos extends Listagem {
    private clientes: Array<Cliente>
    private pets: Array<Pet>
    private produtosConsumidos: Array<ProdutoConsumido>
    constructor(clientes: Array<Cliente>,pets: Array<Pet>, produtosConsumidos: Array<ProdutoConsumido>) {
        super()
        this.clientes = clientes
        this.pets = pets
        this.produtosConsumidos = produtosConsumidos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos consumidos por cliente:`);
        this.produtosConsumidos.forEach(produtoConsumido => {
            const clienteResponsavel = this.clientes.find(cliente => cliente.getCpf.getValor === produtoConsumido.getCliente().getCpf.getValor);
            if (clienteResponsavel) {
                console.log(`Nome do Responsável: ${clienteResponsavel.nome}`);
            } else {
                console.log(`Responsável não encontrado.`);
            }
            console.log(`Produto: ${produtoConsumido.getProduto().nome}`);
            console.log(`Pet: ${produtoConsumido.getPet().getNome}`);

            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}