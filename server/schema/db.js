const Sequelize = require('sequelize')
const config = require('../config')


const dbConfig = config.DATA_BASE
const sequelize = new Sequelize(`mysql://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.schema}`,
    {
        pool: {
            max: 5,
            min: 1,
            acquire: 30000,
            idle: 10000
        }
    })

module.exports = sequelize