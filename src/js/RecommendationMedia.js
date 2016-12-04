import React, { Component } from 'react'
import { Media, Well } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import '../css/Styles.css'
import photo from '../img/headshot_0.jpg'

class RecommendationMedia extends Component {
	render() {
		return(
			<Well className="recommendation-panel">
			    <Media>
			      <Media.Left align="top">
			        <img width={64} height={64} src={photo} role="presentation"/>
			      </Media.Left>
			      <Media.Body>
			        <Media.Heading><a href={this.props.recommendation.linkedin_url} target="_blank">{this.props.recommendation.colleagueName}</a></Media.Heading>
			        <h6>{this.props.recommendation.position}, {this.props.recommendation.relationship}</h6>
			        <p>{this.props.recommendation.recommendation} </p> <h6> - {this.props.recommendation.dateGiven}</h6>
			      </Media.Body>
			    </Media>
		    </Well>
		) 
	}
}

export default RecommendationMedia
