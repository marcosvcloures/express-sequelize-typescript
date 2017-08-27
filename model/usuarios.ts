import { Sequelize, DataTypes } from "sequelize";

export default (sequelize: Sequelize, DataTypes: DataTypes) => {
    return sequelize.define('usuarios', {
        IDUSUARIO: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        USERNAME: {
            type: DataTypes.STRING(40),
            allowNull: false,
            unique: true
        },
        PASSWORD: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        NOME: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        CPFCNPJ: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        EMAIL: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        MAX_LOGINS: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'usuarios'
    })
}