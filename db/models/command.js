'use strict'


const Sequelize = require('sequelize')
const db = require('APP/db')

const Command = db.define('commands', {
  prompt: {
  	type: Sequelize.TEXT,
  	allowNull: false,
  	notEmpty: true
  },
  response: {
  	type: Sequelize.TEXT,
  	allowNull: false,
  	notEmpty: true
  }
})

module.exports = Command
