import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Container from '../Components/Container';
import PersonalCard from '../Components/PersonalCard';
import Anthony1 from '../pictures/Anthony1.jpg';

export default function AboutUs() {
	const { t } = useTranslation();
	return (
		<div>
			<Container>
				<PersonalCard
					description={t('anthony.discreption')}
					img={Anthony1}
					name="Anthony"
				></PersonalCard>
			</Container>
			<Container>
				<Typography
					fontStyle={'Noto Serif, serif'}
					variant="body1"
					align="center"
					style={{ whiteSpace: 'pre-wrap' }}
				>
					{t('about.us.text')}
				</Typography>
			</Container>
		</div>
	);
}
