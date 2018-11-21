import React from 'react';
import Tilt from 'react-tilt';
import koala from './koala.png';
import './Logo.css'

const Logo = () => {
	return (
		<div className="ma4 mt0">
			<Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 100, width: 100 }} >
				<div className="Tilt-inner pa3">
					<img src={koala} alt="logo" style={{paddingTop: '5px'}}/>
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;