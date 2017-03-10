import { combineReducers } from 'redux'
import {reducer} from 'redux-form'

const rootReducer = combineReducers({
  auth: require('./auth').default,  
  form: reducer 
})

export default rootReducer
