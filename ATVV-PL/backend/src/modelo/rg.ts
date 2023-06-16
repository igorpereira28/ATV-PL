import { Sequelize, DataTypes, Model } from 'sequelize';
import db from '../db/conexao';
import Cliente from './cliente';

const RG = db.define("rg", {
        idRG: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        numeroRG: {
            type: DataTypes.STRING,
            allowNull: false,
        },
});

RG.belongsTo(Cliente, { foreignKey: 'idCliente' }); // Define a associação com o modelo Cliente


export default RG;