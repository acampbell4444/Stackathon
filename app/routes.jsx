'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import store from './store'
import Home from './components/Home'
import Log from './components/Log'
import App from './components/App'


export default function Root () {
	return (
    	<Provider store={store}>
      		<Router history={browserHistory}>
      			<Route path="/" component={App}>
        		<IndexRedirect to="/home" />
        		<Route path="/home" component={Home} />
        		<Route path="/log" component={Log} />
      			</Route>
  			</Router>
  		</Provider>
	)
}




