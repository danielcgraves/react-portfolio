import React from 'react';

function Nav({ currentPage, handlePageChange }) {
	return (
		<div>
			<h2 className='my-name'>Daniel Graves</h2>
			<ul className='nav nav-tabs justify-content-center'>
				<li className='nav-item'>
					<a
						href='#about'
						onClick={() => handlePageChange('About')}
						// conditional Ternary operator, if the current page is About page then the nav-link is active or else it is not.

						className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
					>
						About Me
					</a>
				</li>
				<li className='nav-item'>
					<a
						href='#portfolio'
						onClick={() => handlePageChange('Portfolio')}
						className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
					>
						Portfolio
					</a>
				</li>
				<li className='nav-item'>
					<a
						href='#contact'
						onClick={() => handlePageChange('Contact')}
						className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
					>
						Contact
					</a>
				</li>
				<li className='nav-item'>
					<a
						href='#resume'
						onClick={() => handlePageChange('Resume')}
						className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
					>
						Resume
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Nav;
