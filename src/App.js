import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import Heading from './js/Heading'
import About from './js/About'

class App extends Component {
  render() {
    return (
      <div>
        <Heading />
        <About />
      </div>
    )
  }
}

export default App
