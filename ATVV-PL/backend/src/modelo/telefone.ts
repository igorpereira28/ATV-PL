import { Sequelize, DataTypes, Model } from 'sequelize';
import db from '../db/conexao';
import Cliente from './cliente';

const Telefone = db.define("telefone", {
  idTelefone: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  ddd: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Telefone.belongsTo(Cliente, { foreignKey: 'idCliente' }); // Define a associação com o modelo Cliente

export default Telefone;