import { Sequelize, DataTypes, Model } from 'sequelize';
import db from '../db/conexao';

const Servico = db.define("servico", {
        idServico: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        nomeServico: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        valorServico: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
});

export default Servico;