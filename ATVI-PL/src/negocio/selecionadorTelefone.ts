import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Telefone from "../modelo/telefone";

export default class SelecionadorTelefone {
    private clientes: Array<Cliente>;
    private telefones: Array<Telefone>;

    constructor(clientes: Array<Cliente>, telefones: Array<Telefone>) {
        this.clientes = clientes;
        this.telefones = telefones;
    }

    public selecionar(cpf: string, novoNumeroTelefone: string) {
        let telefoneAlvo = new Telefone("", "", new Cliente("", "", new CPF("", new Date())));

        this.clientes.forEach(cliente => {
            this.telefones.forEach(telefone => {
                if (cpf === cliente.getCpf.getValor && novoNumeroTelefone === telefone.getNumero) {
                    telefoneAlvo = telefone;
                }
            });
        });

        return telefoneAlvo;
    }
}