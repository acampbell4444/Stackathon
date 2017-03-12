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
import VoiceRecognitionDemo from './components/VoiceReq'

export default function Root () {
	return (
    	<Provider store={store}>
      		<Router history={browserHistory}>
      			<Route path="/" component={App}>
        		<IndexRedirect to="/barBalancer" />
        		<Route path="/home" component={Home} />
        		<Route path="/log" component={Log} />
            <Route path="/barBalancer" component={BarBalancerContainer} />
            <Route path="/multiFly" component={MultiFlyContainer} />
            <Route path="/multiFlyAdv" component={MultiFlyAdvContainer} />
            <Route path="/double" component={DoubleContainer} />
            <Route path="/doubleSp" component={DoubleSpContainer} />
      			</Route>
  			</Router>
  		</Provider>
	)
}




