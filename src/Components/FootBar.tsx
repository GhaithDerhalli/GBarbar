import { styled } from '@mui/material/styles';
import { Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const StyledDiv = styled('div')(({ theme }) => ({
	backgroundColor: '#FFD6BF',
	padding: '5% 5% 0% 5%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start',
	[theme.breakpoints.up('md')]: { height: '30vh' },
	marginTop: '20vh',
}));
const BottomBar = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-evenly',
	alignItems: 'center',
	height: '10vh',
}));
const StyledinformationDiv = styled('div')(({ theme }) => ({
	[theme.breakpoints.up('md')]: { maxWidth: '40%' },
}));

export default function FootBar() {
	const { t } = useTranslation();
	return (
		<div>
			<StyledDiv>
				<StyledinformationDiv>
					<Typography variant="h5" fontWeight="bold" color="white">
						Vi hjälper dig hitta
					</Typography>
					<Typography variant="body1" color="white">
						propstr.se är sajten för dig som enkelt vill söka,
						jämföra och boka en tid för att .... bla nblabla bhlab
						abla bla balabla a ablablaba alabablaba al
						abablabalablabala a abala aassa
					</Typography>
				</StyledinformationDiv>
			</StyledDiv>

			<BottomBar>
				<Link
					color="#000000"
					fontFamily={'Times New Roman, Times, serif'}
					href="/AboutUs"
				>
					<Typography>{t('about.us.button')}</Typography>
				</Link>
				<Link
					color="#000000"
					fontFamily={'Times New Roman, Times, serif'}
					href="/ContactUs"
				>
					<Typography>{t('contact.us.button')}</Typography>
				</Link>
				<Link
					color="#000000"
					fontFamily={'Times New Roman, Times, serif'}
					href="/Offer"
				>
					<Typography>{t('what.do.we.offer')}</Typography>
				</Link>
				<Link
					color="#000000"
					fontFamily={'Times New Roman, Times, serif'}
					href="/Events"
				>
					<Typography>{t('our.event.title')}</Typography>
				</Link>
			</BottomBar>
		</div>
	);
}
