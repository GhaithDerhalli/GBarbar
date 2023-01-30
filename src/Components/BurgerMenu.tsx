import { Drawer, IconButton, MenuItem, Typography } from '@mui/material';
import { Suspense, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageSelector from './translate';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function BurgerMenu() {
	
	const [open, setOpen] = useState(false);
	const menuNavigationItems = [
		{ name: 'about.us.button', route: '/AboutUs' },
		{ name: 'contact.us.button', route: '/ContactUs' },
		{ name: 'what.do.we.offer', route: '/offer' },
		{ name: 'our.event.title', route: '/events' },
	];

	const hanedleRouting = (route: string) => {
		navigate(route);
	};

	const navigate = useNavigate();
	const { t } = useTranslation();

	return (
		<>
			<IconButton onClick={() => setOpen(!open)}>
				<MenuIcon fontSize="large" />
			</IconButton>
			<Drawer open={open} onClose={() => setOpen(!open)}>
				<div style={{ margin: '20px' }}>
					<Suspense fallback={null}>
						<LanguageSelector />
					</Suspense>
					{menuNavigationItems.map((item) => (
						<div key={item.name}>
							<MenuItem
								onClick={() => hanedleRouting(item.route)}
							>
								<Typography variant="h5">
									{t(item.name)}
								</Typography>
							</MenuItem>
						</div>
					))}
				</div>
			</Drawer>
		</>
	);
}
