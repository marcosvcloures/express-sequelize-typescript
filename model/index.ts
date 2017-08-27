import sequelize from './config'

export default {
    usuarios: sequelize.import('./usuarios'),
    login_tries: sequelize.import('./login_tries')
}