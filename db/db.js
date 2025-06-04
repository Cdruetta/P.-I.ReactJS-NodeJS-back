const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('crud_db', 'root', 'Gise@cris', {
    host: 'localhost',
    dialect: 'mysql',
    
})

module.exports = sequelize
