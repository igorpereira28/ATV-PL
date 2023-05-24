import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    private rgs: Array<RG>
    private telefones: Array<Telefone>
    private pets: Array<Pet>
    constructor(clientes: Array<Cliente>, rgs: Array<RG>, telefones: Array<Telefone>, pets: Array<Pet>) {
        super()
        this.clientes = clientes
        this.rgs = rgs
        this.telefones = telefones
        this.pets = pets
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            // Encontrar o RG correspondente ao cliente
            const rgsCliente = this.rgs.filter(rg => rg.getCliente() === cliente);
            rgsCliente.forEach(rg => {
                console.log(`RG: ${rg.getValor}`);
            });
            // Encontrar os telefones correspondentes ao cliente
            const telefonesCliente = this.telefones.filter(telefone => telefone.getCliente() === cliente);
            telefonesCliente.forEach(telefone => {
                console.log(`Telefone: ${'(' + telefone.getDdd + ')' + telefone.getNumero}`);
            });
            // Encontrar os pets correspondentes ao cliente
            const petsCliente = this.pets.filter(pet => pet.getCliente() === cliente);
            petsCliente.forEach(pet => {
                console.log(`Nome do Pet: ${pet.getNome}`);
                console.log(`Raça do Pet: ${pet.getRaca}`);
                console.log(`Gênero do Pet: ${pet.getGenero}`);
                console.log(`Tipo do Pet: ${pet.getTipo}`);
            });

            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}