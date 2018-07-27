import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../images/logo.png';


const  Header = () => {
	return (
		<div>
			 <header className="secondary">
				 <div>
				 	<Link to="/" className="page-title">
						<div className="logo">
							<img src={Logo} alt="My Recipe App Logo" /> 
						</div>
						<h1>My Recipes</h1>
					</Link>
				</div>
			</header>  
		</div>	
	);
}


export default Header;


