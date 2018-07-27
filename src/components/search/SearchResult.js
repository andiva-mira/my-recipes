import React from 'react';
import {Link} from 'react-router-dom';
import LazyLoad from 'react-lazy-load';


const SearchResult = props => {
	return (
	<div>
	{ 	props.ingredient.length !== 0 && 

		<div className="search-container">
		
			<div className="heading-container">
				<h2><span> Search Results for </span>  <span>"{props.ingredient}"</span> ingredient</h2>
				<button  onClick={props.closeSearchResult} className="close-search-button">
					<span> Close</span>
				</button>
			</div>
			<div className="search-list">

		{
			props.searchResult.map((item, index) => {
				return (
					<div className="search-list--item" key={item.idMeal}>
						<div className="search-list--img">
							<LazyLoad>
						  		<img src={item.strMealThumb} alt={item.strMeal} />
						  	</LazyLoad>
					  	</div>
	 				  	<div className="search-list--summary">
						  	<div className="search-list--summary__title">
								<h3>{(item.strMeal).substring(0,27)}...</h3>
							</div>
							<div className="search-list--summary__buttons">
								<div className="recipe-button">
									<Link to={{ 
									 		pathname: `/recipe=${((item.strMeal).toLowerCase()).replace(/ /g,"-")}`,
										  	state: {recipe: item.idMeal}
										  }}>	
										<span>View Recipe</span> 
									</Link>
								</div>
							</div>
						</div>
					</div>
				);
			})
		}

		</div>

		</div>
	}
	</div>

		);
}


export default SearchResult;
