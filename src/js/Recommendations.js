import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import '../css/Styles.css'

import { ReceivedRecommendations } from './ReceivedRecommendations'

class Recommendations extends Component {
	render() {
		return(
			<aside id="recommendations" className="recommendations">
				<div className="text-vertical-center mid-height">
					<h1 className="text-center">What colleagues are saying about Ryan</h1>
				</div>
			</aside>
		) 
	}
}

export default Recommendations