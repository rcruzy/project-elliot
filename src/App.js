import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import moment from 'moment'
import {Fade} from 'react-bootstrap'

import Heading from './js/Heading'
import About from './js/About'
import Skills from './js/Skills'
import Recommendations from './js/Recommendations'
import Footer from './js/Footer'

import ReceivedRecommendations from './js/ReceivedRecommendations'

class App extends Component {
  
  constructor(...args) {
    super(...args)
    this.state = {}
  }

	componentWillMount() {
		this.setState({open: true})
	}

  render() {
    return (
      <div>
        <Fade in={this.state.open}>
          <Heading />
        </Fade>
        <About />
        <Skills />
        <Recommendations recommendations={ReceivedRecommendations}/>
        <Footer currentYear={moment().year()}/>
      </div>
    )
  }
}

export default App
