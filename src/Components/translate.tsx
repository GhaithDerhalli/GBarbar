import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
	const { i18n } = useTranslation();
	const [language, setLanguage] = useState(i18n.language);

	const updateLanguage = (event: any) => {
		i18n.changeLanguage(event.target.value);
		setLanguage(event.target.value);
	};

	return (
		<FormControl>
			<InputLabel id="demo-simple-select-label">language</InputLabel>
			<Select value={language} label="Language" onChange={updateLanguage}>
				<MenuItem value={'en'}>en</MenuItem>
				<MenuItem value={'sv'}>sv</MenuItem>
				<MenuItem value={'ar'}>ar</MenuItem>
			</Select>
		</FormControl>
	);
};

export default LanguageSelector;
