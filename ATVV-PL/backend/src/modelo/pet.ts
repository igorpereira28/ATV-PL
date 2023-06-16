import { Sequelize, DataTypes, Model } from 'sequelize';
import db from '../db/conexao';
import Cliente from './cliente';

const Pet = db.define("pet", {
  idPet: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nomePet: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoPet: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  racaPet: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  generoPet: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Pet.belongsTo(Cliente, { foreignKey: 'idCliente' }); // Define a associação com o modelo Cliente

export default Pet;