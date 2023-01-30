import { Button, Divider, styled, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Container from '../Components/Container';
import Pic from '../pictures/drinks.jpg';

const Events = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const redirectToOffer = () => {
		navigate('/ContactUs');
	};
	const Image = styled('img')({
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundPosition: 'center 40%',

		width: '100vw',
		height: '65vh',
	});

	return (
		<div>
			<Container>
				<Typography variant="h2"> {t('our.event.title')}</Typography>
			</Container>
			<Image src={Pic} />
			<Container>
				<Container
					styling={{ display: 'flex', flexDirection: 'column' }}
				>
					<Typography variant="h2" style={{ marginBottom: '20px' }}>
						{t('events.header')}
					</Typography>
					<Typography variant="body2"> {t('events.text')}</Typography>
				</Container>
				<Divider orientation="vertical" flexItem></Divider>
				<Container>
					<Typography style={{ whiteSpace: 'pre' }}>
						{t('event.inforamtion.text')}{' '}
					</Typography>
				</Container>
			</Container>
		</div>
	);
};

export default Events;
