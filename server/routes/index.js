const express = require('express')
const app = express.Router()
const Controller = require('../controllers/index')

app.get('/', Controller.landingPage)
app.get('/find', Controller.find)

app.post('/api/v1/register', Controller.register)
app.post('/api/v1/login', Controller.login)

app.post('/api/v1/activate/:token', Controller.verifyEmail)
app.post('/api/v1/forgot-password', Controller.forgotPassword)
app.post('/api/v1/reset-password', Controller.resetPassword)

app.post('/api/v1/profile', Controller.profile)


module.exports = app