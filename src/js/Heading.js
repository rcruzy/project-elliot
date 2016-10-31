import React, { Component } from 'react'
import '../css/Styles.css'


class Heading extends Component {
	render() {
		return(
			<header className="header" id="top">
				<div className="text-vertical-center">
					<h1>Hey It's Ryan</h1>
					<h3>Programmer Analyst</h3>
				</div>
			</header>
		) 
	}
}

export default Heading