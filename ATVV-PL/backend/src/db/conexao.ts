import { Sequelize } from 'sequelize';
import mysql from 'mysql2/promise';

const createDatabase = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
  });

  await connection.query('CREATE DATABASE IF NOT EXISTS octagro');

  console.log('Banco de Dados criado com sucesso');

  await connection.end();
};

createDatabase();

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'petshop',
  define: {
    timestamps: true,
    freezeTableName: true,
  },
});

export default sequelize;