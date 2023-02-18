import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';

export default function Resume() {
	return (
		<div className='row mt-5'>
			<div className='col-sm resume-col'>
				<Card
					className='m-auto text-center resume-card'
					style={{ maxWidth: '30rem' }}
				>
					<Card.Body>
						<Card.Title className='mb-5'>Resume</Card.Title>

						<Button
							href={require('../../assets/daniel-graves-resume.pdf')}
							download
							target='_blank'
							variant='outline-dark'
						>
							Download My Resume
						</Button>
					</Card.Body>
				</Card>
			</div>
			<div className='col-sm resume-col'>
				<Card
					className='m-auto text-center proficiencies-card'
					style={{ maxWidth: '30rem' }}
				>
					<Card.Body>
						<Card.Title
							className='mb-4
						'
						>
							Proficiencies
						</Card.Title>
						<ul className='p-0'>
							<li>
								<b>Front-End</b>
							</li>

							<li>
								<p>HTML, CSS, JavaScript, jQuery, Bootstrap, React</p>
							</li>
							<br></br>

							<li>
								<b>Back-End</b>
							</li>
							<li>
								<p>APIs, Node, Express, MVC, REST, PWA, Git, npm, Jest, Webpack</p>
							</li>
							<br></br>

							<li>
								<b>Data Bases</b>
							</li>
							<li>
								<p>MySQL, Sequelize, NoSQL, GraphQL, MongoDB, Mongoose</p>
							</li>
						</ul>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
}
