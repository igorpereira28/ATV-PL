import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import RG from "../modelo/rg"
import Cadastro from "./cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    private rgs: Array<RG>
    constructor(clientes: Array<Cliente>, rgs: Array<RG>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
        this.rgs = rgs
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)

        //CPF
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        //RG
        let valorRG = this.entrada.receberTexto(`Por favor informe o número do RG: `);
        let dataRG = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
        let partesDataRG = dataRG.split('/')
        let anoRG = new Number(partesDataRG[2].valueOf()).valueOf()
        let mesRG = new Number(partesDataRG[1].valueOf()).valueOf()
        let diaRG = new Number(partesDataRG[0].valueOf()).valueOf()
        let dataEmissaoRG = new Date(anoRG, mesRG, diaRG)

        let cliente = new Cliente(nome, nomeSocial, cpf);
        this.clientes.push(cliente)
        
        let salvarrg = new RG(valorRG, dataEmissaoRG, cliente);
        this.rgs.push(salvarrg)
        
        console.log(salvarrg);
        console.log(`\nCadastro concluído :)\n`);
    }
}