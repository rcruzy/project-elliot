import React, { Component } from 'react'
import { Grid, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import '../css/Styles.css'


class About extends Component {
	render() {
		return(
			<section id="about" className="about">
				<Grid>
					<Row>
						<Col lg={12} className="text-center">
							<h2>&lt;Ryan at a glance /&gt;</h2>
							<p className="lead">
								Highly interested in being involved in working with projects using modern open technology stack to provide users with superb experience and application functionality.
							</p>
						</Col>
					</Row>
				</Grid>
			</section>
		) 
	}
}

export default About