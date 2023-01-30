import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useScreenHelper } from '../helper/ScreenHelper';

type IProps = {
	name: string;
	description: string;
	img: string;
};

export default function PersonalCard(props: IProps) {
	const isMobile = useScreenHelper();

	return (
		<Card style={{ padding: '5px' }}>
			{isMobile ? (
				<CardMedia image={props.img} component="img" height="200" />
			) : (
				<CardMedia image={props.img} component="img" height="350" />
			)}

			<CardContent>
				<Typography variant="h5">{props.name}</Typography>
				<Typography style={{ maxWidth: '500px' }} variant="subtitle1">
					{props.description}
				</Typography>
			</CardContent>
		</Card>
	);
}
