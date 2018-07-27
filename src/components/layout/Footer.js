import React from 'react';
import GithubIcon from '../../images/github.svg';
import LinkedinIcon from '../../images/linkedin.svg';
import Balloon from '../../images/balloon.png';
import News from '../../images/news-icon.png';



const  Footer = () => {
	return (
		 <footer>
			 <div className="footer-upper">
				 <div className="footer-social">
				 	<h6> Social Links</h6>
				 	<div className="footer-links">
					 	<a href="https://github.com/andiva-mira/" target="_blank" rel="noopener noreferrer">
							<img src={GithubIcon} alt="Github Icon" /> 
						</a>
					 	<a href="https://www.linkedin.com/in/miroslava-andreeva-a33667160/" target="_blank" rel="noopener noreferrer">
							<img src={LinkedinIcon} alt="LinkedIn Icon" /> 
						</a>
					</div>
				</div>
				<div className="footer-apps">
					<h6> My Other Apps</h6>
					<div className="footer-links">
					 	<a href="https://andiva-mira.github.io/venues-weather-app/" target="_blank" rel="noopener noreferrer">
							<img src={Balloon} alt="Venues Weather App Icon" /> 
						</a>
					 	<a href="https://andiva-mira.github.io/apinews-app/" target="_blank" rel="noopener noreferrer">
							<img src={News} alt="News App Icon" /> 
						</a>
					</div>
				</div>
			</div>
			<div className="footer-lower">
				<p> Designed and developed by M.I.A.</p>
			</div>
		</footer>  
	);
}


export default Footer;