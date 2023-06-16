import { Sequelize, DataTypes, Model } from 'sequelize';
import db from '../db/conexao';
import Cliente from './cliente';
import Pet from './pet';
import Produto from './produto';

const ProdutoConsumido = db.define("produtoconsumido", {
  idProdutoConsumido: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Associações
ProdutoConsumido.belongsTo(Cliente, { foreignKey: 'idCliente' });
ProdutoConsumido.belongsTo(Pet, { foreignKey: 'idPet' });
ProdutoConsumido.belongsTo(Produto, { foreignKey: 'idProduto' });

export default ProdutoConsumido;