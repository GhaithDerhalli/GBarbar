import { Typography } from '@mui/material';
import Container from '../Components/Container';
import Pic from '../pictures/resturant.jpg';
import Pic2 from '../pictures/drink.jpg';
import Pic3 from '../pictures/food.jpg';
import { useNavigate } from 'react-router-dom';
import { useScreenHelper } from '../helper/ScreenHelper';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
	Animator,
	batch,
	Fade,
	Move,
	ScrollContainer,
	ScrollPage,
} from 'react-scroll-motion';
import { ImageButton } from '../Components/ImageButton';
import Image, {
	BackgroundImage,
	ImageBackdrop,
	ImageMarked,
	ImageSrc,
} from '../Components/MainPageImageComponents';

export default function Main() {
	const navigate = useNavigate();
	const isMobile = useScreenHelper();

	const redirectToOffer = () => {
		navigate('/ContactUs');
	};

	const responsiveStyle = () => {
		return isMobile
			? {
					margin: '0 20px 20px 0',
			  }
			: { margin: '0 0 20px 20px' };
	};

	const { t } = useTranslation();

	useEffect(() => {
		ScrollReveal().reveal('.headline');
	}, []);

	return (
		<>
			<ScrollContainer>
				<ScrollPage page={0}>
					<div
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							minWidth: 300,
							width: '100%',
						}}
					>
						<ImageButton
							focusRipple
							onClick={redirectToOffer}
							style={{
								minHeight: '80vh',
								width: '100%',
								marginBottom: '15%',
							}}
						>
							<ImageSrc
								style={{ backgroundImage: `url(${Pic})` }}
							/>
							<ImageBackdrop className="MuiImageBackdrop-root" />
							<BackgroundImage>
								<Typography
									component="span"
									variant="subtitle1"
									color="inherit"
									sx={{
										position: 'relative',
										p: 4,
										pt: 2,
										pb: (theme) =>
											`calc(${theme.spacing(1)} + 6px)`,
									}}
								>
									{t('contact.us.button')}
									<ImageMarked className="MuiImageMarked-root" />
								</Typography>
							</BackgroundImage>
						</ImageButton>
					</div>
				</ScrollPage>
				{/* <ScrollPage page={1}>
					<Animator animation={batch(Fade(), Move(0, -100, 0, -100))}>
						<div
							style={{
								backgroundImage: `url(${Pic2})`,
								backgroundSize: '100%',
								height: '80vh',
								display: 'flex',
								alignItems: 'center',
								padding: '20px',
							}}
						>
							<Typography
								style={responsiveStyle()}
								color="white"
								variant={isMobile ? 'h6' : 'h4'}
								align={isMobile ? 'left' : 'right'}
							>
								{t('headpage.first.text')}
							</Typography>
						</div>
					</Animator>
				</ScrollPage> */}
				<ScrollPage page={1}>
					<Animator animation={batch(Fade(), Move(0, -100, 0, -100))}>
						<Container reverse={true}>
							<Typography
								style={responsiveStyle()}
								variant={isMobile ? 'h6' : 'h4'}
								align={isMobile ? 'left' : 'right'}
							>
								{t('headpage.first.text')}
							</Typography>
							<Image pictureSrc={Pic2} />
						</Container>
					</Animator>
				</ScrollPage>
				<ScrollPage page={2}>
					<Animator animation={batch(Fade(), Move(0, -100, 0, -100))}>
						<Container reverse={false}>
							<Typography
								style={responsiveStyle()}
								variant={isMobile ? 'h6' : 'h4'}
								align={'left'}
							>
								{t('headpage.second.text')}
							</Typography>
							<Image pictureSrc={Pic3} />
						</Container>
					</Animator>
				</ScrollPage>
			</ScrollContainer>
			<Container>
				<Typography>
					"{t('quote.anthony')}" - {t('anthony.name')}
				</Typography>
			</Container>
		</>
	);
}
