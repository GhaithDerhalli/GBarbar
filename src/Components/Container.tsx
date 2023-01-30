import { styled } from '@mui/material/styles';

const StyledDiv = styled('div')(({ theme }) => ({
	padding: '5%',
	display: 'flex',
	[theme.breakpoints.down('sm')]: {
		flexDirection: 'column',
	},
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	marginBottom: '10vh',
}));

const ReverseStyledDiv = styled('div')(({ theme }) => ({
	padding: '5%',
	display: 'flex',
	[theme.breakpoints.down('sm')]: {
		flexDirection: 'column',
	},
	flexDirection: 'row-reverse',
	alignItems: 'center',
	justifyContent: 'center',
	marginBottom: '10vh',
}));

type IProps = {
	children: JSX.Element | JSX.Element[];
	reverse?: boolean;
	styling?: React.CSSProperties;
};
export default function Container({
	children,
	reverse = false,
	styling,
}: IProps) {
	if (reverse) return <ReverseStyledDiv>{children}</ReverseStyledDiv>;

	return <StyledDiv style={styling}>{children}</StyledDiv>;
}
