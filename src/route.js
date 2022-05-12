const express = require('express')
const questionController = require('./controllers/questionController')
const roomController = require('./controllers/roomControlller')

const route = express.Router()

route.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
route.get('/create-room', (req, res) => res.render('index', {page: 'create-room'}))
route.get('/room/:room', roomController.open)
route.post('/enter-room', roomController.enter)
route.post('/question/create/:room', questionController.create)
route.post('/question/:room/:question/:action', questionController.index)
route.post('/create-room', roomController.create)

module.exports = route