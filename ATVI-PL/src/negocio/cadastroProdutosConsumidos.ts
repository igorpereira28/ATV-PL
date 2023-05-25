import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import empresa from "../modelo/empresa";
import Pet from "../modelo/pet";
import Produto from "../modelo/produto";
import ProdutoConsumido from "../modelo/produtoConsumido";
import Cadastro from "./cadastro"

export default class CadastroProdutoConsumido{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private entrada: Entrada
    private pets: Array<Pet>
    private produtoConsumido: Array<ProdutoConsumido>

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, pets: Array<Pet>, produtoConsumido: Array<ProdutoConsumido>) {
        this.clientes = clientes
        this.produtos = produtos
        this.pets = pets
        this.entrada = new Entrada()
        this.produtoConsumido = produtoConsumido
    }
    public cadastrar(clienteAlvo: Cliente, produtoAlvo: Produto, petAlvo: Pet){
        let execucaoPet = true

        while (execucaoPet) {
            console.log(`Deseja cadastrar o serviço ${produtoAlvo.nome} ao pet ${petAlvo.getNome}, do cliente ${clienteAlvo.nome}?:`);
            console.log(`1 - Sim`);
            console.log(`2 - Não`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {

                case 1:
                    let produtoCons = new ProdutoConsumido(clienteAlvo, produtoAlvo, petAlvo)

                    this.produtoConsumido.push(produtoCons)
                    console.log(`Produto do cliente cadastrado com sucesso!`)
                    break;

                case 2:
                    execucaoPet = false
                    console.log(`BLZ`)
                    break;
            }
        } 
    }
    
}