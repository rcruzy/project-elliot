import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import App from './App'
import './index.css'

ReactGA.initialize('UA-91402482-1', {
  debug: true,
  titleCase: false}
  )

function logPageView() {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

ReactDOM.render(
  <App onLoad={logPageView()}/>,
  document.getElementById('root')
);
