import React from 'react';
import Container from '../Components/Container';
import Tabs from '../Components/Tabs';

export default function Search() {
	return (
		<Container>
			<Tabs
				tabsList={[
					{ label: 'test', value: '1' },
					{ label: 'test2', value: '2' },
				]}
				handleTabsChange={() => console.log('tab')}
			>
				<div></div>
			</Tabs>
		</Container>
	);
}
