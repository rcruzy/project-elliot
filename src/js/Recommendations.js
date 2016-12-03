import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import '../css/Styles.css'

import RecommendationMedia from './RecommendationMedia'

class Recommendations extends Component {
	render() {
		return(
			<aside id="recommendations" className="recommendations">
				<h1 className="text-center recommendation-header">What colleagues are saying about Ryan</h1>
				{
					this.props.recommendations.map((recommendation)=> {
						return <RecommendationMedia recommendation={recommendation} key={recommendation.recommendationKey}/>
					})
				}
			</aside>
		) 
	}
}

export default Recommendations