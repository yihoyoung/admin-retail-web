const userService = require('../service/user-service')

exports.getUser = async function() {
    return await userService.getUser()
}