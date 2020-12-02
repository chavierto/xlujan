import React from 'react';
import './Navbar.css';

function Navbar() {
	return (
		<nav className='nav'>
			<div>
				<h1 className='navTitle'>Xavier Luján</h1>
			</div>
			<div>
				<img
					className='avatar'
					src='https://transit7.cargocollective.com/1/12/397701/13786469/face-portrait.jpg'
					height='65'
					alt='Portrait of Xavier'
				/>
			</div>
		</nav>
	);
}

export default Navbar;
