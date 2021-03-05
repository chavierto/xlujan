import React from 'react';
import Navbar from './Navbar/Navbar';
import InfoPanel from './InfoPanel';

import './App.css';
import PostsPanel from './PostsPanel';

function App(posts) {
	return (
		<div className='App'>
			<nav>
				<Navbar />
			</nav>
			<InfoPanel />
			<PostsPanel />
		</div>
	);
}

export default App;
