import React, { Component } from 'react'
import { Media } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import '../css/Styles.css'
import photo from '../img/headshot_0.jpg'

class RecommendationMedia extends Component {
	render() {
		return(
		    <Media>
		      <Media.Left align="top">
		        <img width={64} height={64} src={photo} />
		      </Media.Left>
		      <Media.Body>
		        <Media.Heading>{this.props.recommendation.colleagueName}</Media.Heading>
		        <h6>{this.props.recommendation.position}, {this.props.recommendation.relationship}</h6>
		        <p>{this.props.recommendation.recommendation} </p> <h6> - {this.props.recommendation.dateGiven}</h6>
		      </Media.Body>
		    </Media>
		) 
	}
}

export default RecommendationMedia
