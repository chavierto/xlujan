import React from 'react';
import Navbar from './Navbar/Navbar';
import InfoPanel from './InfoPanel';

import './App.css';

function App() {
	return (
		<div className='App'>
			<nav>
				<Navbar />
				<InfoPanel />
			</nav>
		</div>
	);
}

export default App;
