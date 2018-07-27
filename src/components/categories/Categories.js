import React from 'react';
import {Link} from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import CategoryHeading from './CategoryHeading';

const Categories = props => {
	return (
		<div>
			<CategoryHeading />     
			<div className="categories-container">
			{
				props.categories.map((category, index) => {
					return (
						<div className="category-item" key={category.idCategory}>
						 <Link to={{ 
							  pathname: `/category=${(category.strCategory).toLowerCase()}`,
							  state: {category: category.strCategory}
							  }}>
							 <LazyLoad height={200}>
								<img src={category.strCategoryThumb} alt={category.strCategory} />
							</LazyLoad>
							<h2>{category.strCategory}</h2>
						</Link>
						</div>
					);
				})
			}
			</div>
		</div>


		);
}


export default Categories;

