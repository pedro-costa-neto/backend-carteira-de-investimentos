import Sequelize, { Model } from 'sequelize';
import database from '../database';

class Carteira extends Model {
    public id!: Number;
    public nome!: String;
    public descricao!: String;
}

Carteira.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome: {
        type: Sequelize.STRING(80),
        allowNull: false
    },

    descricao: {
        type: Sequelize.STRING(250),
        allowNull: true
    },

    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  }, {
    sequelize: database.connection,
    freezeTableName: true
});

export default Carteira;
