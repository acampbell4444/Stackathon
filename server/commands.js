
const db = require('APP/db')
const Command = db.model('commands')



module.exports = require('express').Router()
	.get('/', (req, res, next) => 
		Command.findAll()
		.then(commands => res.json(commands))
		.catch(next))
	.post('/', (req,res,next) =>
		Command.create(req.body)
		.then(command=> res.json(command))
		.catch(next))
