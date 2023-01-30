import { createTheme, ThemeProvider } from '@mui/material';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FootBar from './Components/FootBar';
import Header from './Components/Header';
import AboutUs from './pages/AboutUs';
import ContactForm from './pages/ContactUs';
import Events from './pages/Events';
import Main from './pages/MainPage';
import Offer from './pages/Offer';
import SignIn from './pages/SignIn';

const theme = createTheme({
	typography: {
		fontFamily: ['Playfair Display', 'cursive'].join(','),
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/AboutUs" element={<AboutUs />} />
					<Route path="/SignIn" element={<SignIn />} />
					<Route path="/Offer" element={<Offer />} />
					<Route path="/ContactUs" element={<ContactForm />} />
					<Route path="/Events" element={<Events />} />
				</Routes>
				<FootBar />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
