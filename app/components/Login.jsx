import React from 'react'

export const Login = ({ login }) => (
  <form onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.username.value, evt.target.password.value)
  } }>
    <div><input name="username" defaultValue='alan@example.com' /></div>
    <div><input name="password" type="password" defaultValue='1234'/> </div>
    <div><input type="submit" className='button btn-success login' value="Login" /> </div>

  </form>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)
