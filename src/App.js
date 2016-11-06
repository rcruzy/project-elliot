import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import Heading from './js/Heading'
import About from './js/About'
import Skills from './js/Skills'
import Footer from './js/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Heading />
        <About />
        <Skills />
        <Footer />
      </div>
    )
  }
}

export default App
