const sequelize = require('../db/connection');
const { Sequelize } = require('sequelize');
let Like = sequelize.define('like', {
    reaction: Sequelize.STRING,
    createdAt: Sequelize.STRING

})

module.exports = Like;