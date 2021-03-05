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
			<footer>
				<h4>
					- - - - - -<br></br>
					<br></br>Thank you for taking the time to check out my work!
					<br></br>
					You can contact me at{' '}
					<a
						href='mailto:hola@xavierlujan.com'
						target='_blank'
						rel='noreferrer'>
						hola@xavierlujan.com
					</a>
				</h4>
				<h4>Made with ⚡️ on the Internet</h4>
			</footer>
		</div>
	);
}

export default App;
