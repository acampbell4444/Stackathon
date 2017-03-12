'use strict'


const Sequelize = require('sequelize')
const db = require('APP/db')

const Command = db.define('commands', {
  prompt: Sequelize.TEXT,
  response: Sequelize.TEXT,
})

module.exports = Command