import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import '../css/Styles.css'


class About extends Component {
	render() {
		return(
			<section id="about" className="about">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<h2>Me at a glance</h2>
							<p className="lead">
								Highly interested in being involved in working with projects using modern open technology stack to provide users with superb experience and application functionality.
							</p>
						</div>
					</div>
				</div>

			</section>
		) 
	}
}

export default About