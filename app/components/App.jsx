import React from 'react'
import {connect} from 'react-redux'
import Login from './Login'
import WhoAmI from './WhoAmI'

const App = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav> 
      {children}
    </div>
)

export default App