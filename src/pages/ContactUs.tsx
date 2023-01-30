import {
	Button,
	FormControl,
	FormGroup,
	Input,
	TextareaAutosize,
} from '@mui/material';
import axios from 'axios';
import { t } from 'i18next';
import React, { ChangeEvent, useState } from 'react';
import Container from '../Components/Container';

const ContactForm = () => {
	const [status, setStatus] = useState('submit.button');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = () => {
		setStatus('Sending...');

		let details = {
			name: 'name',
			email: email,
			message: message,
		};
		let response;
		axios
			.post('http://localhost:8000/contact', details)
			.then((res) => {
				response = res;
				setStatus('submit.button');
				alert(response.status);
			})
			.catch((error) => {
				console.log(error);
				setStatus('submit.button');
			});
	};

	const handleEmailChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setEmail(event.target.value);
	};

	const handleMessageChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setMessage(event.target.value);
	};

	return (
		<Container>
			<FormControl>
				<FormGroup>
					<label htmlFor="name">{t('form.name')}</label>
					<Input type="text" id="name" required />
					<label style={{ marginTop: '20px' }} htmlFor="email">
						{t('form.email')}
					</label>
					<Input
						type="email"
						id="email"
						onChange={handleEmailChange}
						required
					/>

					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							marginTop: '20px',
						}}
					>
						<label htmlFor="message">{t('form.message')}</label>
						<TextareaAutosize
							style={{
								width: '50vw',
								height: '80px',
								resize: 'vertical',
							}}
							onChange={handleMessageChange}
							id="message"
							required
						/>
					</div>
					<Button type="submit" onClick={handleSubmit}>
						{t(status)}
					</Button>
				</FormGroup>
			</FormControl>
		</Container>
	);
};

export default ContactForm;
