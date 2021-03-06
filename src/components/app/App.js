import './App.css';
import { Nav } from '../nav/Nav';
import { ScrollingWheels } from '../scrolling-wheels/ScrollingWheels';
import { useState } from 'react';

function App() {
	const [currentSection, setCurrentSection] = useState();

	return (
		<div className={'app'}>
			<Nav className={'navWrapper'} currentActiveItem={currentSection} />
			<ScrollingWheels getCurrentSection={setCurrentSection} />
		</div>
	);
}

export default App;
