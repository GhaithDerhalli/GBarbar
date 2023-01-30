import { useTranslation } from 'react-i18next';
import Container from '../Components/Container';
import DesignBar from '../pictures/DesignBar.png';
import BarMenu from '../pictures/BarMenu.png';
import StaffTraining from '../pictures/StaffTraining.png';
import WineList from '../pictures/winelist.png';
import Budget from '../pictures/budget.png';
import Inventory from '../pictures/inventory.png';
import Schedule from '../pictures/schedule.png';
import Website from '../pictures/website.png';

export default function offer() {
	const { t } = useTranslation();
	const Anthony = {
		items: [
			{ img: BarMenu, text: t('can.help.you.point2'), reverse: true },
			{ img: DesignBar, text: t('can.help.you.point1'), reverse: false },
			{
				img: StaffTraining,
				text: t('can.help.you.point3'),
				reverse: true,
			},
			{ img: WineList, text: t('can.help.you.point4'), reverse: false },
			{ img: Budget, text: t('can.help.you.point5'), reverse: true },
			{ img: Inventory, text: t('can.help.you.point6'), reverse: false },
			{ img: Schedule, text: t('can.help.you.point7'), reverse: true },
			{ img: Website, text: t('can.help.you.point8'), reverse: false },
		],
	};
	return (
		<ul>
			{Anthony.items.map((item) => (
				<Container reverse={item.reverse}>
					<li style={{ margin: '20px' }} key={item.text}>
						{item.text}
					</li>
					<img
						src={item.img}
						style={{ height: '250px', width: '250px' }}
					/>
				</Container>
			))}
		</ul>
	);
}
