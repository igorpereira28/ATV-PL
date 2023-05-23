import Cliente from "./cliente"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private rgs: Array<RG>
    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
        this.rgs = []
    }
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }
    public get getRG(){
        return this.rgs
    }
}