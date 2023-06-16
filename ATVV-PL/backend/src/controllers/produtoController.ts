import { Request, Response } from 'express';
import Produto from '../modelo/produto';
import Cliente from '../modelo/cliente';
import Pet from '../modelo/pet';
import ProdutoConsumido from '../modelo/produtoConsumido';

export default class ProdutoControllers {

  public static async cadastrarProduto(req: Request, res: Response): Promise<any> {
    const data = req.body;
  
    if (!data.nomeProduto) {
      return res.json({ message: "Por favor, digite o nome do Produto!" });
    }
  
    if (!data.valorProduto) {
      return res.json({ message: "Por favor, digite o valor do Produto!" });
    }
  
    try {
      const novoProduto = await Produto.create(
        {
          nomeProduto: data.nomeProduto,
          valorProduto: data.valorProduto,
        },
      );
  
      res.json({ message: "Produto cadastrado com sucesso!", status: 201 }).status(201);
    } catch (error) {
      return res.json(error).status(500);
    }
  }

  public static async deletarProduto(req: Request, res: Response): Promise<any> {
    const idProduto = req.params.idProduto;
    try {
      await Produto.destroy({ 
        where: {
          idProduto: idProduto 
          } 
      })
    return res.json({message: "Produto excluído com sucesso!", status: 201}).status(201)
    } catch (error) {
        return res.json(error).status(500)
    }
  }

  public static async atualizarProduto(req: Request, res: Response): Promise<any> {
    const idProduto = req.params.idProduto;
    const data = req.body;
  
    try {
      const updateData: any = {};
  
      if (data.nomeProduto) {
        updateData.nomeProduto = data.nomeProduto;
      }
  
      if (data.valorProduto) {
        updateData.valorProduto = data.valorProduto;
      }
  
      await Produto.update(updateData, {
        where: {
          idProduto: idProduto,
        },
      });
  
      res.status(200).json({ message: "Produto atualizado com sucesso!" });
    } catch (error) {
      return res.json("deu erro").status(500);
    }
  }

  public static async listarProduto(req: Request, res: Response): Promise<any> {
    try {
      const produtos = await Produto.findAll();
  
      return res.json(produtos).status(200);
    } catch (error) {
      return res.json(error).status(500);
    }
  }

  static async procurarProduto(req: Request, res: Response) {
    const idProduto = req.params.idProduto;
    try {
      const produtoProcurado = await Produto.findByPk(idProduto);
  
      if (!produtoProcurado) {
        return res.status(422).json({ message: "Produto não encontrado" });
      }
    
      return res.status(200).json({ produto: produtoProcurado });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao procurar produto", error });
    }
  }

  public static async cadastrarProdutoConsumido(req: Request, res: Response): Promise<any> {
    const data = req.body;
  
    if (!data.idCliente) {
      return res.json({ message: "Por favor, informe o ID do cliente!" });
    }
  
    if (!data.idPet) {
      return res.json({ message: "Por favor, informe o ID do pet!" });
    }
  
    if (!data.idProduto) {
      return res.json({ message: "Por favor, informe o ID do produto!" });
    }
  
    const idCliente = data.idCliente; // ID do cliente
    const idPet = data.idPet; // ID do pet
    const idProduto = data.idProduto; // ID do produto
  
    try {
      const cliente = await Cliente.findByPk(idCliente);
      const pet = await Pet.findByPk(idPet);
      const produto = await Produto.findByPk(idProduto);
  
      if (!cliente) {
        return res.json({ message: "Cliente não encontrado!" });
      }
  
      if (!pet) {
        return res.json({ message: "Pet não encontrado!" });
      }
  
      if (!produto) {
        return res.json({ message: "Produto não encontrado!" });
      }
  
      const produtoConsumido = await ProdutoConsumido.create({
        idCliente: idCliente,
        idPet: idPet,
        idProduto: idProduto,
        quantidade: data.quantidade || 1, // Quantidade do produto consumido
      });
  
      res.json({ message: "Produto consumido cadastrado com sucesso!", status: 201 }).status(201);
    } catch (error) {
      return res.json(error).status(500);
    }
  }

  public static async listarProdutoConsumido(req: Request, res: Response): Promise<any> {
    try {
      const produtosConsumidos = await ProdutoConsumido.findAll({
        include: [
          { model: Cliente, attributes: ['nomeCliente'] },
          { model: Pet, attributes: ['nomePet'] },
          { model: Produto, attributes: ['nomeProduto', 'valorProduto'] },
        ],
      });
  
      const listaProdutosConsumidos = produtosConsumidos.map((produtoConsumido: any) => {
        const nomeCliente = produtoConsumido.cliente?.nomeCliente || 'Cliente não encontrado';
        const nomePet = produtoConsumido.pet?.nomePet || 'Pet não encontrado';
        const nomeProduto = produtoConsumido.produto?.nomeProduto || 'Serviço não encontrado';
        const valorProduto = produtoConsumido.produto?.valorProduto || 0;
  
        return {
          nomeCliente,
          nomePet,
          nomeProduto,
          valorProduto,
        };
      });
  
      return res.json(listaProdutosConsumidos).status(200);
    } catch (error) {
      return res.json(error).status(500);
    }
  }

  public static async listarClientesMaisConsumiram(req: Request, res: Response): Promise<any> {
    try {
      const clientesQuantidade: Map<string, number> = new Map();
  
      // Calcular a quantidade total de serviços consumidos por cada cliente
      const produtosConsumidos = await ProdutoConsumido.findAll();
      produtosConsumidos.forEach((produtoConsumido: any) => {
        const idCliente = produtoConsumido.idCliente.toString();
        const quantidade = produtoConsumido.quantidade;
  
        if (clientesQuantidade.has(idCliente)) {
          clientesQuantidade.set(idCliente, clientesQuantidade.get(idCliente)! + quantidade);
        } else {
          clientesQuantidade.set(idCliente, quantidade);
        }
      });
  
      // Ordenar os clientes por quantidade de serviços consumidos em ordem decrescente
      const clientesOrdenados = Array.from(clientesQuantidade.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);
  
      const listaClientesMaisConsumiram = await Promise.all(
        clientesOrdenados.map(async ([idCliente, quantidade]) => {
          const cliente = await Cliente.findByPk(idCliente);
          const nomeCliente = cliente?.get("nomeCliente") || 'Cliente não encontrado';
  
          return {
            nomeCliente,
            quantidade,
          };
        })
      );
  
      return res.json(listaClientesMaisConsumiram).status(200);
    } catch (error) {
      return res.json(error).status(500);
    }
  }

  public static async listarProdutosMaisConsumidos(req: Request, res: Response): Promise<any> {
    try {
      const produtosQuantidade: Map<string, number> = new Map();
  
      // Calcular a quantidade total de cada serviço consumido
      const produtosConsumidos = await ProdutoConsumido.findAll();
      produtosConsumidos.forEach((produtoConsumido: any) => {
        const idProdutoConsumido = produtoConsumido.idProduto.toString();
        const quantidade = produtoConsumido.quantidade;
  
        if (produtosQuantidade.has(idProdutoConsumido)) {
          produtosQuantidade.set(idProdutoConsumido, produtosQuantidade.get(idProdutoConsumido)! + quantidade);
        } else {
          produtosQuantidade.set(idProdutoConsumido, quantidade);
        }
      });
  
      // Ordenar os serviços por quantidade consumida em ordem decrescente
      const produtosOrdenados = Array.from(produtosQuantidade.entries())
        .sort((a, b) => b[1] - a[1]);
  
      const listaProdutosMaisConsumidos = await Promise.all(
        produtosOrdenados.map(async ([idProdutoConsumido, quantidade]) => {
          const produto = await Produto.findByPk(idProdutoConsumido);
          const nomeProduto = produto?.get('nomeProduto') || 'Serviço não encontrado';
  
          return {
            nomeProduto,
            quantidade,
          };
        })
      );
  
      return res.json(listaProdutosMaisConsumidos).status(200);
    } catch (error) {
      return res.json(error).status(500);
    }
  }

  public static async listarClientesMaisConsumiramValor(req: Request, res: Response): Promise<any> {
    try {
      const clientesValor: Map<number, number> = new Map();
  
      // Obter todos os registros de ProdutoConsumido
      const produtosConsumidos = await ProdutoConsumido.findAll();
  
      // Calcular o valor total consumido por cada cliente
      for (const produtoConsumido of produtosConsumidos) {
        const idCliente = produtoConsumido.getDataValue('idCliente');
        const idProduto = produtoConsumido.getDataValue('idProduto');
        const quantidade = produtoConsumido.getDataValue('quantidade');
  
        // Obter o valor do serviço
        const produto = await Produto.findByPk(idProduto);
        const valorProduto = produto?.getDataValue('valorProduto') || 0;
  
        // Calcular o valor total
        const valorTotal = valorProduto * quantidade;
  
        if (clientesValor.has(idCliente)) {
          clientesValor.set(idCliente, clientesValor.get(idCliente)! + valorTotal);
        } else {
          clientesValor.set(idCliente, valorTotal);
        }
      }
  
      // Ordenar os clientes por valor consumido em ordem decrescente
      const clientesOrdenados = Array.from(clientesValor.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);
  
      const listaClientesMaisConsumiramValor = await Promise.all(
        clientesOrdenados.map(async ([idCliente, _]) => {
          const cliente = await Cliente.findByPk(idCliente);
          const nomeCliente = cliente?.getDataValue('nomeCliente') || 'Cliente não encontrado';
  
          // Calcular o valor total gasto pelo cliente
          let valorGasto = 0;
          const produtosCliente = produtosConsumidos.filter(
            (produtoConsumido) => produtoConsumido.getDataValue('idCliente') === idCliente
          );
  
          for (const produtoConsumido of produtosCliente) {
            const idProduto = produtoConsumido.getDataValue('idProduto');
            const quantidade = produtoConsumido.getDataValue('quantidade');
            const produto = await Produto.findByPk(idProduto);
            const valorProduto = produto?.getDataValue('valorProduto') || 0;
            valorGasto += valorProduto * quantidade;
          }
  
          return {
            nomeCliente,
            valorGasto,
          };
        })
      );
  
      return res.json(listaClientesMaisConsumiramValor).status(200);
    } catch (error) {
      return res.json(error).status(500);
    }
  }

  public static async listarProdutosMaisConsumidosPorTipoERaca(req: Request, res: Response): Promise<any> {
    try {
      const produtosTipoRaca: Map<string, Map<string, number>> = new Map();
  
      // Calcular a quantidade total de cada serviço consumido por tipo e raça de pet
      const produtosConsumidos = await ProdutoConsumido.findAll();
  
      for (const produtoConsumido of produtosConsumidos) {
        const idPet = Number(produtoConsumido.get("idPet"));
        const pet = await Pet.findByPk(idPet);
        if (!pet) {
          continue;
        }
  
        const tipoPet = String(pet.get("tipoPet"));
        const racaPet = String(pet.get("racaPet"));
        const quantidadeProduto = Number(produtoConsumido.get("quantidade"));
  
        if (!produtosTipoRaca.has(tipoPet)) {
          produtosTipoRaca.set(tipoPet, new Map());
        }
  
        const produtosRaca = produtosTipoRaca.get(tipoPet);
        if (produtosRaca && produtosRaca.has(racaPet)) {
          produtosRaca.set(racaPet, produtosRaca.get(racaPet)! + quantidadeProduto);
        } else {
          produtosRaca?.set(racaPet, quantidadeProduto);
        }
      }
  
      const listaProdutosMaisConsumidosPorTipoERaca: { tipoPet: string, racaPet: string, quantidade: number }[] = [];
      produtosTipoRaca.forEach((produtosRaca, tipoPet) => {
        produtosRaca.forEach((quantidadeProduto, racaPet) => {
          listaProdutosMaisConsumidosPorTipoERaca.push({
            tipoPet,
            racaPet,
            quantidade: quantidadeProduto
          });
        });
      });
  
      // Ordenar os serviços por quantidade consumida em ordem decrescente
      listaProdutosMaisConsumidosPorTipoERaca.sort((a, b) => b.quantidade - a.quantidade);
  
      return res.json(listaProdutosMaisConsumidosPorTipoERaca).status(200);
    } catch (error) {
      return res.json(error).status(500);
    }
  }
  
}