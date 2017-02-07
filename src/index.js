import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import {Route, Router, browserHistory, Redirect } from 'react-router'
import App from './App'
import './index.css'

/**
	* Google analytics wrapped in react-ga
	* might need to set debug property to false in the future.
**/
ReactGA.initialize('UA-91402482-1', {
  debug: true,
  titleCase: false}
  )

/**
	* Kicks in when route is updated/ page has been loaded.
**/
function logPageView() {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

/**
	* default route is domain (i.e ryanjcruz.com)
	* when user types any URI after the domain, it would redirect to the default route
	* i.e (ryanjcruz.com/hey => ryanjcruz.com).
**/
ReactDOM.render((
  <Router history={browserHistory} onUpdate={logPageView}>
  	<Route path="/" component={App}/>
  	<Redirect from="/*" to="/" />
  </Router>
  ), document.getElementById('root')
)
