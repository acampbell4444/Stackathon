'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import store from './store'
import App from './components/App'
import Home from './components/Home'
import Log from './components/Log'
import BarBalancerContainer from './containers/BarBalancerContainer'
import MultiFlyAdvContainer from './containers/MultiFlyAdvContainer'
import MultiFlyContainer from './containers/MultiFlyContainer'
import DoubleContainer from './containers/DoubleContainer'
import DoubleSpContainer from './containers/DoubleSpContainer'
import NewCommand from './components/NewCommand'
import {grabCommands} from './reducers/command'


const getCommands = () => {
  return store.dispatch(grabCommands())
}


export default function Root () {
	return (
    	<Provider store={store}>
      		<Router history={browserHistory}>
      			<Route path="/" component={App} onEnter={getCommands}>
          		<IndexRedirect to="/barBalancer" />
              <Route path="/barBalancer" component={BarBalancerContainer} onEnter={getCommands} />
              <Route path="/multiFly" component={MultiFlyContainer} onEnter={getCommands}/>
              <Route path="/multiFlyAdv" component={MultiFlyAdvContainer} onEnter={getCommands}/>
              <Route path="/double" component={DoubleContainer} onEnter={getCommands}/>
              <Route path="/doubleSp" component={DoubleSpContainer} onEnter={getCommands}/>
              <Route path="/newCommand" component={NewCommand} />
      			</Route>
  			</Router>
  		</Provider>
	)
}




