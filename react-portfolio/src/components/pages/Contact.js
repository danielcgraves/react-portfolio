import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [errorMessage, setErrorMessage] = useState('');

	const { name, email, message } = formState;

	function handleEmail(e) {
		if (e.target.name === 'user_email') {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage('Please enter a valid email address');
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage('');
				}
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleBlank(e) {
		if (e.target.name === 'user_name' || e.target.name === 'message') {
			if (!e.target.value.length) {
				setErrorMessage(`This is a required field`);
			} else {
				setErrorMessage('');
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	return (
		<section>
			<div>
				<h4 className='contact-title'>Contact Me</h4>
			</div>
			<div></div>
			<form className='container contact-form' id='contact-form'>
				<div className='row text-center'>
					<div className='col-12 form-col'>
						<label className='label' htmlFor='user_name'>
							Name
						</label>
						<br></br>
						<input
							type='text'
							defaultValue={name}
							onBlur={handleBlank}
							name='user_name'
							className='form-input text-center'
						/>
					</div>

					<div className='col-12'>
						<label className='label' htmlFor='email'>
							Email
						</label>
						<br></br>
						<input
							type='email'
							defaultValue={email}
							name='user_email'
							onBlur={handleEmail}
							className='form-input text-center'
						/>
					</div>
					<div className='col-12'>
						<label className='label' htmlFor='message'>
							Message
						</label>
						<br></br>
						<textarea
							name='message'
							defaultValue={message}
							onBlur={handleBlank}
							rows='5'
							className='form-input text-center'
						/>
					</div>

					{errorMessage && (
						<div>
							<p className='error-text'>{errorMessage}</p>
						</div>
					)}
					<button className='btn btn-dark submit-btn' type='submit'>
						Submit
					</button>
				</div>
			</form>
			;
		</section>
	);
}
