import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function Footer() {
	return (
		<footer
			className='fixed-bottom text-center'
			style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', paddingTop: '1rem' }}
		>
			<p className='mb-0'>Social Media</p>
			<div className='container p-4 pb-0'>
				<section className='mb-4'>
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
	);
}

export default Footer;
