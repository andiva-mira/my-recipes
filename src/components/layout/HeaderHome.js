import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../images/logo.png';
import Search from '../search/Search';
import SearchResult from '../search/SearchResult';
import SearchMessage from '../search/SearchMessage';

class HeaderHome extends React.Component {
	state = {
		searchResult: [],
		searchMessage: "",
		ingredient: ""
	}

getRecipeSearch = (e) => {
		const ingredient = e.target.elements.ingredient.value;
		e.preventDefault();
		fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
				.then(response => response.json())
				.then(data => {
					const searchResult = data.meals;
					//console.log(data.meals);
					if(searchResult  !== null) {
						this.setState({
							searchResult: searchResult,
							searchMessage: "",
							ingredient: ingredient
						});
				// console.log(this.state.searchResult);
					} else {
						this.setState({
							searchMessage: `No results found matching "${ingredient}"!`       
						});
					}
				})
				.catch(error => {
					console.log('Error fetching and parsing data', error);
				});

	}

	closeSearchResult = () => {
		this.setState({
			searchResult: [],
			ingredient: ""
		});
	}

	closeSearchMessage = () => {
		this.setState({
			searchMessage: ""
		});
	}


	render() {

		return (
			<div>
				 <header>
						 <div>
							 <Link to="/" className="page-title">
									<div className="logo">
										<img src={Logo} alt="My Recipe App Logo" /> 
									</div>
									<h1>My Recipes</h1>
								</Link>
							</div>
							<div className="search">
								<Search getRecipeSearch={this.getRecipeSearch} />
								<SearchMessage searchMessage={this.state.searchMessage} closeSearchMessage={this.closeSearchMessage} />
							</div>
					</header>  
					{
						<SearchResult searchResult={this.state.searchResult} ingredient={this.state.ingredient} closeSearchResult={this.closeSearchResult}/>

					} 

			</div>		
		
		);
	}

}


export default HeaderHome;


