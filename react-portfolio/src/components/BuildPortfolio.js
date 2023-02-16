import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';

export default function BuildPortfolio() {
	const [currentPage, setCurrentPage] = useState('About');

	// Chooses which page to render based on the user's selection
	const renderPage = () => {
		if (currentPage === 'About') {
			return <About />;
		}
		if (currentPage === 'Portfolio') {
			return <Portfolio />;
		}
		if (currentPage === 'Resume') {
			return <Resume />;
		}

		if (currentPage === 'Contact') {
			return <Contact />;
		}
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<div className='container'>
			<Nav currentPage={currentPage} handlePageChange={handlePageChange} />
			{renderPage()}
			<Footer />
		</div>
	);
}
