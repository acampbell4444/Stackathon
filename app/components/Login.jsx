import React from 'react'

export const Login = ({ login }) => (
  <form onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.username.value, evt.target.password.value)
  } }>
    <div>
      <input className='loginput' name="username" defaultValue='alan@example.com' />
      <input type="submit" className='button btn-xs btn-success' value="Login" />
    </div>
    <div><input className='loginput' name="password" type="password" defaultValue='1234'/> </div>

  </form>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)
