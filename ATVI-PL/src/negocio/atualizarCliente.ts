import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import empresa from "../modelo/empresa";
import SelecionadorTelefone from "./selecionadorTelefone";

export default class AtualizarCliente{
    private entrada: Entrada
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public atualizar(
        clienteAlvo: Cliente,
        novoNomeCliente?: string,
        novoNomeSocialCliente?: string,
        novoNumeroTelefone?: string
      ) {
        this.clientes.forEach((cliente, indice) => {
          if (cliente.getCpf === clienteAlvo.getCpf) {
            if (novoNomeCliente) {
              this.clientes[indice].nome = novoNomeCliente;
            }
            if (novoNomeSocialCliente) {
              this.clientes[indice].nomeSocial = novoNomeSocialCliente;
            }
      
            let execucao = true;
      
            while (execucao) {
              console.log(`Deseja atualizar telefone(s):`);
              console.log(`1 - Sim`);
              console.log(`2 - Não`);
      
              let entrada = new Entrada();
              let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
      
              switch (opcao) {
                case 1:
                  let selecionarTelefone = new SelecionadorTelefone(this.clientes, empresa.getTelefones);
                  let procurarTelefone = entrada.receberTexto(`Por favor, digite o número de telefone do cliente para atualizar: `);
                  let cpfClienteAlvo = clienteAlvo.getCpf.getValor;
                  let telefoneCliente = selecionarTelefone.selecionar(cpfClienteAlvo, procurarTelefone);
                  
                  if (telefoneCliente && novoNumeroTelefone) {
                      telefoneCliente.setNumero(novoNumeroTelefone);
                  }
                  break;
                case 2:
                  execucao = false;
                  console.log(`BLZ`);
                  break;
              }
            }
          }
        });
      }
}