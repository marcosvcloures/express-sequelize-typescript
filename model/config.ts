import * as Sequelize from 'sequelize'

export default new Sequelize("database", "root", "", {
    host: "localhost",
    dialect: "mysql",

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    define: {
        timestamps: false
    },

    dialectOptions: {
        supportBigNumbers: true
    }
})