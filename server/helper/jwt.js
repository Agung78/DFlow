var jwt = require('jsonwebtoken');

function generateToken(payload) {
    var token = jwt.sign({ payload }, 'shhhhh')
    return token
}

function verifyToken(token) {
    return jwt.verify(token, 'shhhhh');
}

module.exports = {
    generateToken,
    verifyToken
}