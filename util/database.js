const Sequelize = require('sequelize');

const sequelize = new Sequelize('shop','root','Swetha123@',{
    dialect: 'mysql',
    host : 'localhost'
})

module.exports = sequelize;