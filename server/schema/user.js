const Sequelize = require('sequelize')
const sequelize = require('./db.js')
const uuid = require('uuid')

const Model = Sequelize.Model
class User extends Model {}


User.init({
    id: {
        type: Sequelize.UUID,
        defaultValue: uuid(),
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'user'
})

User.sync().then(() => {
    console.log('== Table: User init')
})

export default User