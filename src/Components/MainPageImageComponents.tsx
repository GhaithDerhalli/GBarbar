import { styled } from '@mui/material';

export const StyledImage = styled('img')(({ theme }) => ({
	backgroundSize: 'cover',
	[theme.breakpoints.down('sm')]: {
		height: '70vw',
	},
	height: '45vw',
	width: '64vw',
	backgroundPosition: 'center 40%',
}));

export default function Image({ pictureSrc }: any) {
	return <StyledImage src={pictureSrc} />;
}

export const ImageSrc = styled('span')({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundSize: 'cover',
	backgroundPosition: 'center 40%',
});

export const BackgroundImage = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: theme.palette.common.white,
}));

export const ImageBackdrop = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundColor: theme.palette.common.black,
	opacity: 0.4,
}));

export const ImageMarked = styled('span')(({ theme }) => ({
	height: 3,
	width: 18,
	backgroundColor: theme.palette.common.white,
	position: 'absolute',
	bottom: -2,
	left: 'calc(50% - 9px)',
}));
