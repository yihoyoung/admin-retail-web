const fs = require('fs')
const path = require('path')
const dbConfig = require('./secrets/db.json')

let secretPath = 'secrets'

module.exports = {
    SECRET: fs.readFileSync(path.resolve(__dirname, secretPath, 'jwt-key.txt')),
    EXP_TIME: '1h',
    DATA_BASE: dbConfig
}