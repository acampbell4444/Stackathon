import axios from 'axios'

const ADD_COMMAND = 'ADD_COMMAND'
const FETCH_COMMANDS = 'FETCH_COMMANDS'

export const addCommand = command => ({
  type: ADD_COMMAND, command
})

export const getAllCommands = commands => ({
  type: FETCH_COMMANDS, commands
})

const initState = {
  allCommands: [],
  newCommand: {}
}

const reducer = (state = initState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
  
    case ADD_COMMAND:
      newState.newCommand = action.command
      break;

    case FETCH_COMMANDS:
      newState.allCommands = action.commands
      break;
  }
  return newState
}


export const createCommand = (command) =>
  dispatch => {
    console.log('commy',command)
    axios.post('/api/commands', command)
    .then((command) => dispatch(addCommand(command) ) )
    .catch((err) => console.err)
}

export const grabCommands = () =>
  dispatch =>
    axios.get('/api/commands')
      .then(response => {
        const commands = response.data
        console.log('zzzzzz', commands)
        return dispatch(getAllCommands(commands))
      })
      .catch(err => console.err)

export default reducer