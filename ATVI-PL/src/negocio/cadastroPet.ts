import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Cadastro from "./cadastro"
import Pet from "../modelo/pet"

export default class CadastroPet extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    private pets: Array<Pet>
    constructor(clientes: Array<Cliente>, pets: Array<Pet>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
        this.pets = pets
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do Pet`);

        let procurarCliente = this.entrada.receberTexto(`Informe o CPF do cliente responsável do Pet: `);

        const cliente = this.clientes.findIndex(item => item.getCpf.getValor === procurarCliente);
        const clienteEncontrado = this.clientes[cliente]

        let execucaoPet = true

        while (execucaoPet) {
            console.log(`Deseja cadastrar pet(s) ao cliente ${clienteEncontrado.nome}?:`);
            console.log(`1 - Sim`);
            console.log(`2 - Não`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {

                case 1:

                    let nomePet = this.entrada.receberTexto(`Por favor informe o nome do pet: `);
                    let racaPet = this.entrada.receberTexto(`Por favor informe a raça do pet: `);
                    let generoPet = this.entrada.receberTexto(`Por favor informe o genêro do pet: `);
                    let tipoPet = this.entrada.receberTexto(`Por favor informe o tipo do pet: `);

                    let salvarPet = new Pet(nomePet, racaPet, generoPet, tipoPet,  clienteEncontrado);
                    this.pets.push(salvarPet)
                    break;

                case 2:
                    execucaoPet = false
                    console.log(`BLZ`)
                    break;
            }
        } 
    
    }
}