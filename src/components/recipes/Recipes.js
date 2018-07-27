import React from 'react';
import {Link} from 'react-router-dom';
import RecipesHeading from './RecipesHeading';



const Recipes = props =>  (
	<div>
		<RecipesHeading />
		<div className="recipe-list">

			{ props.recipes.map((recipe,index, recipesArray) => {
					 const recipeEntries = Object.entries(recipe);
						const ingredientsArr = [];
						recipeEntries.map((item, index) => {
							if ( index >= 8 && index <= 17) {
								ingredientsArr.push(item[1]);
							}
							return ingredientsArr;
						});
						//console.log(ingredientsArr);

						return (
							<div className="recipe-list--item" key={recipe.idMeal} style={{marginBottom:"0"}}> 
								<div className="recipe-img">
									<img 
											src={recipe.strMealThumb} 
											alt={recipe.strMeal} 
									/>
								</div>
								<div className="recipe-summary">
									<h3 className="recipe-summary--title">
									{recipe.strMeal}
									</h3>
									<div className="recipe-summary--subtitles">
										<h4> Meal Category:
											<span> {recipe.strCategory}</span>
										</h4>
										<h4> Recipe Origin: 
											<span> {recipe.strArea} </span>
										</h4>
									</div>
								</div>
							 <div className="recipe-instructions">
 									<div className="recipe-ingredients">
										<h4 >Main Ingredients: </h4>
										 <ul className="recipe-ingredients--list">
											{
												ingredientsArr.map((ingredient, index) => {
													const imgSource = `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`;
													if (ingredient !== "") {
														return <li key={ingredient + index}>
																	<img src={imgSource} alt={ingredient} className="ingredient-img"/>
																</li>
													} else {
														return false;
													}
												 })

											}
										 </ul>
						 		</div>
						 		<h4>Instructions</h4>
								<p> {`${recipe.strInstructions.substring(0,150)}...`}</p>

								<div className="recipe-button">
									<Link to={{ 
											pathname: `/recipe=${((recipe.strMeal).toLowerCase()).replace(/ /g,"-")}`,
											state: {recipe: recipe.idMeal}
											}}><span>View Full Recipe</span></Link>
								 </div>

							 </div>


								
							</div>
						); 
					})
				}
		</div> 
	</div> 
	);
 

export default Recipes;

