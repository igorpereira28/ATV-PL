import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Pet from "../modelo/pet"

export default class AtualizarPet {
    private clientes: Array<Cliente>
    private pets: Array<Pet>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, pets: Array<Pet>) {
        this.clientes = clientes
        this.pets = pets
        this.entrada = new Entrada()
    }

    public atualizar(cpf: string): void {
        const cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpf)

        if (cliente) {
            const petsCliente = this.pets.filter(pet => pet.getClienteCPF() === cpf)

            if (petsCliente.length > 0) {
              console.log(`Pets disponíveis para o cliente ${cliente.nome}:`);
  
              petsCliente.forEach((pet, index) => {
                  console.log(`${index + 1}. ${pet.getNome}`);
              });
  
              let nomePet = this.entrada.receberTexto(`Por favor, digite o nome do pet a ser atualizado: `);
  
              const petSelecionado = petsCliente.find(pet => pet.getNome === nomePet);
              if (petSelecionado) {
                let execucao = true
                while (execucao) {
                    console.log(`\nPet selecionado: ${petSelecionado.getNome}`)
                    console.log(`Opções de atualização:`)
                    console.log(`1. Nome`)
                    console.log(`2. Raça`)
                    console.log(`3. Tipo`)
                    console.log(`4. Gênero`)
                    console.log(`5. Sair`)

                    let entrada = new Entrada()
                    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

                    switch (opcao) {
                        case 1:
                            let novoNome = this.entrada.receberTexto(`Informe o novo nome do pet: `)
                            petSelecionado.setNome(novoNome)
                            console.log(`Nome do pet atualizado para: ${novoNome}`)
                            break;

                        case 2:
                            let novaRaca = this.entrada.receberTexto(`Informe a nova raça do pet: `)
                            petSelecionado.setRaca(novaRaca)
                            console.log(`Raça do pet atualizada para: ${novaRaca}`)
                            break;

                        case 3:
                            let novoTipo = this.entrada.receberTexto(`Informe o novo tipo do pet: `)
                            petSelecionado.setTipo(novoTipo)
                            console.log(`Tipo do pet atualizado para: ${novoTipo}`)
                            break;

                        case 4:
                            let novoGenero = this.entrada.receberTexto(`Informe o novo gênero do pet: `)
                            petSelecionado.setGenero(novoGenero)
                            console.log(`Gênero do pet atualizado para: ${novoGenero}`)
                            break;

                        case 5:
                          execucao = false
                          console.log(`BLZ`)
                          break;

                        default:
                            console.log(`Opção inválida.`)
                            break;
                    }
                }
                } else {
                    console.log(`O pet ${nomePet} não foi encontrado para o cliente ${cliente.nome}.`)
                }
            } else {
                console.log(`Não há pets cadastrados para o cliente ${cliente.nome}.`)
            }
        } else {
            console.log(`Cliente com CPF ${cpf} não encontrado.`)
        }
    }
}