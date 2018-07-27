import React from 'react';
import {Link} from 'react-router-dom';
import LazyLoad from 'react-lazy-load';


const CategoryList = props => (

	<div className="category-list">
		{ props.list.map((item, index) => {
			return (
				<div className="category-list--item" key={item.idMeal}>
					<div className="category-list--img">
						<LazyLoad>
					  		<img src={item.strMealThumb} alt={item.strMeal} />
					  	</LazyLoad>
				  	</div>
				  	<div className="category-list--summary">
					  	<div className="category-list--summary__title">
							<h3>{(item.strMeal).substring(0,27)}...</h3>
						</div>
						<div className="category-list--summary__buttons">
							<div className="recipe-button">
								<Link to={{ 
								 		pathname: `/recipe=${((item.strMeal).toLowerCase()).replace(/ /g,"-")}`,
									  	state: {recipe: item.idMeal}
									  }}>	
									<span>View Recipe</span> 
								</Link>
							</div>
							<div className="home-button">
								<Link  to='/'>
									<span>Back to Homepage</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			
			);
		})

		}

	</div>

);	

export default CategoryList;



