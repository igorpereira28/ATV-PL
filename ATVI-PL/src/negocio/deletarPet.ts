import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";

export default class ExcluirPet {
    private clientes: Array<Cliente>
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, pets: Array<Pet>) {
        this.clientes = clientes
        this.pets = pets
        this.entrada = new Entrada()
    }

    public excluir() {
            let procurarCliente = this.entrada.receberTexto(`Informe o CPF do cliente responsável do Pet: `);

            const cliente = this.clientes.findIndex(item => item.getCpf.getValor === procurarCliente);
            const clienteEncontrado = this.clientes[cliente]

            clienteEncontrado.getPets.forEach((pet, index) => {
                const nomePet = pet.getNome;
                console.log(`Nome do Pet ${index + 1}: ${nomePet}`);
              });
          
              let valorPet = this.entrada.receberTexto(
                `Informe o nome do pet que deseja remover: `
              );
              const indexEncontradoPet = clienteEncontrado.getPets.findIndex(
                (pet) => pet.getNome === valorPet
              );
            
              let confirmacao = this.entrada.receberTexto(
                `Deseja remover o pet de nome ${valorPet}? (S/N): `
              );
          
              if (confirmacao === "S") {
                this.clientes[cliente].getPets.splice(indexEncontradoPet, 1);
                console.log(`\nAnimal removido! :)`);
              } else if (confirmacao === "N") {
                console.log(`\nOperação abortada. :)`);
              } else {
                console.log(`Resposta inválida.`);
              }
    }
}