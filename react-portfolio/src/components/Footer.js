import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function Footer() {
	return (
		<div>
			<div className='clear'></div>
			<footer
				className='fixed-bottom text-center'
				style={{
					backgroundColor: 'lightgrey',
					paddingTop: '0.25rem',
					paddingBottom: 'none',
				}}
			>
				<p className='mb-0'>Social Media</p>
				<div className='container p-0 pb-0'>
					<section className='mb-2'>
						<a
							className='btn text-white btn-floating m-1'
							target={'_blank'}
							style={{ backgroundColor: '#333333' }}
							href='https://github.com/danielcgraves'
							role='button'
						>
							<BsGithub />
						</a>
						<a
							className='btn text-white btn-floating m-1'
							target={'_blank'}
							style={{ backgroundColor: '#0082ca' }}
							href='https://www.linkedin.com/in/daniel-graves-759a2a263/'
							role='button'
						>
							<BsLinkedin />
						</a>
					</section>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
