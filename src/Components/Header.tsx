import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useScreenHelper } from '../helper/ScreenHelper';
import { useTranslation } from 'react-i18next';
import BurgerMenu from './BurgerMenu';

const StyledDiv = styled('div')(({ theme }) => ({
	padding: '2% 5% 2% 5%',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'flex-start',
	[theme.breakpoints.down('md')]: {
		justifyContent: 'space-between',
	},
}));

export default function SearchAppBar() {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const isMobile = useScreenHelper();
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				flexWrap: 'wrap',
			}}
		>
			{isMobile && (
				<>
					<BurgerMenu />
					<StyledDiv>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="open drawer"
							sx={{ mr: 2 }}
							onClick={() => navigate('/')}
						>
							<HomeIcon
								style={{ height: '40px', width: '40px' }}
							/>
							<Typography variant="h5">Barbar.</Typography>
						</IconButton>
					</StyledDiv>
				</>
			)}
			{!isMobile && (
				<StyledDiv>
					<BurgerMenu />
				</StyledDiv>
			)}
			<StyledDiv>
				<Typography variant="h5">{t('title')}</Typography>
			</StyledDiv>
			<StyledDiv>
				{!isMobile && (
					<>
						<StyledDiv>
							<IconButton
								size="large"
								edge="start"
								color="inherit"
								aria-label="open drawer"
								sx={{ mr: 2 }}
								onClick={() => navigate('/')}
							>
								<HomeIcon
									style={{ height: '40px', width: '40px' }}
								/>
								<Typography variant="h5">Barbar.</Typography>
							</IconButton>
						</StyledDiv>
					</>
				)}
			</StyledDiv>
		</div>
	);
}
