import { Sequelize, DataTypes } from "sequelize";

export default (sequelize: Sequelize, DataTypes: DataTypes) => {
    return sequelize.define('login_tries', {
        IP: {
            type: DataTypes.STRING(64),
            allowNull: false,
            primaryKey: true
        },
        COUNT: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        RESET_DATE: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
            tableName: 'login_tries'
        });
};
