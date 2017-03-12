import React from 'react'

export const WhoAmI = ({ user, logout }) => (

<div>
	<div>
    	<span className="whoami-user-name">{user && user.name}</span>
    	<button className="button btn-success" onClick={logout}>Logout</button>
  	</div>
</div>
)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  ({ auth }) => ({ user: auth }),
  {logout},
) (WhoAmI)