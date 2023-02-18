import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import beerFinder from '../../assets/beer-finder.png';
import noteTaker from '../../assets/note-taker.png';
import jate from '../../assets/jate.png';
import weatherDashboard from '../../assets/weather-dashboard.png';
import passwordGenerator from '../../assets/password-generator.png';
import workDayScheduler from '../../assets/work-day-scheduler.png';

export default function Portfolio() {
	return (
		<div>
			<h4 className='portfolio-title'>Portfolio</h4>
			<div className='container-fluid'>
				<div className='row'>
					{/* 
                        
                        Card 1 (Beer Finder)

                    */}

					<div className='col-sm-12 col-md-4 mb-3'>
						<Card
							className='m-auto text-center card-custom'
							style={{ width: '18rem', height: '28rem' }}
						>
							<Card.Img variant='top' src={beerFinder} />
							<Card.Body>
								<Card.Title>Beer Finder</Card.Title>
								<Card.Text>
									Enter your home address to find a list of some of nearby breweries!
								</Card.Text>
								<Button
									href='https://github.com/Canadianfaller7/beer-finder'
									target='_blank'
									className='m-1 custom-button'
									variant='outline-dark'
								>
									GitHub Repo
								</Button>
								<Button
									href='https://canadianfaller7.github.io/beer-finder/'
									target='_blank'
									className='m-1 custom-button'
									variant='outline-dark'
								>
									Deployed App
								</Button>
							</Card.Body>
							<span className='top'></span>
							<span className='right'></span>
							<span className='bottom'></span>
							<span className='left'></span>
						</Card>
					</div>
					{/* 
                        
                        Card 2 (Note Taker)

                    */}
					<div className='col-sm-12 col-md-4 mb-3'>
						<Card
							className='m-auto text-center card-custom'
							style={{ width: '18rem', height: '28rem' }}
						>
							<Card.Img variant='top' src={noteTaker} />
							<Card.Body>
								<Card.Title className='mt-5'>Note Taker</Card.Title>
								<Card.Text>
									An App used for creating, saving and deleting notes.
								</Card.Text>
								<Button
									href='https://github.com/danielcgraves/note-taker'
									target='_blank'
									className='m-1 custom-button'
									variant='outline-dark'
								>
									GitHub Repo
								</Button>
								<Button
									href='https://daniel-graves-note-taker.herokuapp.com'
									target='_blank'
									className='m-1 custom-button'
									variant='outline-dark'
								>
									Deployed App
								</Button>
							</Card.Body>
							<span className='top'></span>
							<span className='right'></span>
							<span className='bottom'></span>
							<span className='left'></span>
						</Card>
					</div>
					{/* 
                        
                        Card 3 (JATE)

                    */}

					<div className='col-sm-12 col-md-4 mb-3'>
						<Card
							className='m-auto text-center card-custom'
							style={{ width: '18rem', height: '28rem' }}
						>
							<Card.Img variant='top' src={jate} />
							<Card.Body>
								<Card.Title>J.A.T.E.</Card.Title>
								<Card.Text>
									Just Another Text Editor. An installable text editing progressive web
									application.
								</Card.Text>
								<Button
									href='https://github.com/danielcgraves/text-editor'
									target='_blank'
									className='m-1 custom-button'
									variant='outline-dark'
								>
									GitHub Repo
								</Button>
								<Button
									href='https://daniel-graves-text-editor.herokuapp.com/'
									target='_blank'
									className='m-1 custom-button'
									variant='outline-dark'
								>
									Deployed App
								</Button>
							</Card.Body>
							<span className='top'></span>
							<span className='right'></span>
							<span className='bottom'></span>
							<span className='left'></span>
						</Card>
					</div>
				</div>
				<div className='row'>
					{/* 
                        
                        Card 4

                    */}

					<div className='col-sm-12 col-md-4 mb-3'>
						<Card
							className='m-auto text-center card-custom'
							style={{ width: '18rem', height: '28rem' }}
						>
							<Card.Img variant='top' src={weatherDashboard} />
							<Card.Body>
								<Card.Title>Weather Dashboard</Card.Title>
								<Card.Text>
									A straight-forward application for checking the weather by typing in a
									city name
								</Card.Text>
								<Button
									href='https://github.com/danielcgraves/weather-dashboard'
									target='_blank'
									className='m-1 custom-button'
									variant='outline-dark'
								>
									GitHub Repo
								</Button>
								<Button
									href='https://danielcgraves.github.io/weather-dashboard/'
									target='_blank'
									className='m-1 custom-button'
									variant='outline-dark'
								>
									Deployed App
								</Button>
							</Card.Body>
							<span className='top'></span>
							<span className='right'></span>
							<span className='bottom'></span>
							<span className='left'></span>
						</Card>
					</div>

					{/* 
                        
                        Card 5

                    */}

					<div className='col-sm-12 col-md-4 mb-3'>
						<Card
							className='m-auto text-center card-custom'
							style={{ width: '18rem', height: '28rem' }}
						>
							<Card.Img variant='top' src={passwordGenerator} />
							<Card.Body>
								<Card.Title>Password Generator</Card.Title>
								<Card.Text>
									An application that will generate a secure, random password based on
									user input.
								</Card.Text>
								<Button
									href='https://github.com/danielcgraves/password-generator'
									target='_blank'
									className='m-1 custom-button'
									variant='outline-dark'
								>
									GitHub Repo
								</Button>
								<Button
									href='https://danielcgraves.github.io/password-generator/'
									target='_blank'
									className='m-1 custom-button'
									variant='outline-dark'
								>
									Deployed App
								</Button>
							</Card.Body>
							<span className='top'></span>
							<span className='right'></span>
							<span className='bottom'></span>
							<span className='left'></span>
						</Card>
					</div>

					{/* 
                        
                        Card 6

                    */}

					<div className='col-sm-12 col-md-4 mb-3 '>
						<Card
							className='m-auto text-center card-custom'
							style={{ width: '18rem', height: '28rem' }}
						>
							<Card.Img variant='top' src={workDayScheduler} />
							<Card.Body>
								<Card.Title>Work Day Scheduler</Card.Title>
								<Card.Text>Write and save notes in a day calendar.</Card.Text>
								<Button className='m-1 custom-button' variant='outline-dark'>
									GitHub Repo
								</Button>
								<Button className='m-1 custom-button' variant='outline-dark'>
									Deployed App
								</Button>
							</Card.Body>
							<span className='top'></span>
							<span className='right'></span>
							<span className='bottom'></span>
							<span className='left'></span>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
