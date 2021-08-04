const Sequelize = require('sequelize')
const config = require('../config')


const dbConfig = config.default.DATA_BASE
const sequelize = new Sequelize(`mysql://${dbConfig.username}:${dbConfig.password}@${dbConfig.port}/${dbConfig.schema}`,
    {
        pool: {
            max: 5,
            min: 1,
            acquire: 30000,
            idle: 10000
        }
    })

export default sequelize