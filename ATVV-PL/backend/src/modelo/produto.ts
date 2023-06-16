import { Sequelize, DataTypes, Model } from 'sequelize';
import db from '../db/conexao';

const Produto = db.define("produto", {
        idProduto: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        nomeProduto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        valorProduto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
});

export default Produto;