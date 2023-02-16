import React from 'react';
import profilePicture from '../../assets/profilePicture.JPG';

export default function About() {
	return (
		<div className='about-container'>
			<h4>Full Stack Developer</h4>
			<img
				src={profilePicture}
				alt='Daniel Graves with his wife and dog'
				className='profile-picture'
			/>
			<p className='mb-2'>Hello!</p>
			<p className='mb-4'>
				My name is Daniel Graves. I am 30-year-old, happily-married, dog dad and
				also a full stack developer. I have experience using a variety of
				development tools including: HTML, CSS, JavaScript, SQL, NoSQL,
				Mongo/Mongoose, MySQL, Express, React, Node, jQuery, Bootstrap, MERN and
				more!
			</p>
			<p className='mb-4'>
				I recently graduated from the Full Stack Web Development program at the
				University Of Utah. The rigorous program kept me on my toes and forced me to
				work at a fast pace in a high stress environment. I also collaborated with
				other students in the program to build projects and applications, many of
				which you will find in my portfolio page.
			</p>
			<p>
				I am always ready and excited to learn new technologies and my experience as
				a teacher has given me exceptional communication and leadership skills.
			</p>
		</div>
	);
}
