const db = require('APP/db')
const Command = require('./models/command')

const seedUsers = () => db.Promise.map([
  {name: 'Alan Campbell', email: 'alan@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedCommands = () => db.Promise.map([
  {prompt: 'what time is it', response:'time to buy a watch'},
  {prompt: 'can i kick it', response:'yes you can'},
], command => Command.create(command))



db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedCommands)
  .then(commands => console.log(`Seeded ${commands.length} commands OK`))
  .catch(error => console.error(error))    
  .finally(() => db.close())
