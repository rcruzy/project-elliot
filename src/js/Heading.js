import React, { Component } from 'react'
import { Panel, Image } from 'react-bootstrap'
import '../css/Styles.css'
import photo from '../img/personal_photo.jpg'


class Heading extends Component {
	render() {
		return(
			<div>
				<header className="header">
					<div className="text-vertical-center cover-photo">
						<Panel className="panel-header">
							<h1>Ryan Cruz</h1>
							<h3>Programmer Analyst</h3>
							
							<Image src={photo} className="cover-photo" circle responsive/>
						</Panel>
					</div>
				</header>
			</div>
		) 
	}
}

export default Heading