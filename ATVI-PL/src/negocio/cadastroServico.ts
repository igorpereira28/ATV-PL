import Entrada from "../io/entrada"
import Servico from "../modelo/servico"
import Cadastro from "./cadastro"

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    
    public cadastrar(): void {
        console.log(`\nInício do cadastro do Produto`);
        let servico = new Servico()
        servico.nome = this.entrada.receberTexto('Por favor, digite o nome do produto: ')

        this.servicos.push(servico)
        console.log(`Produto cadastrado com sucesso!`)
    }

}