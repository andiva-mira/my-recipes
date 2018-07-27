import React from 'react';
import {Link} from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import Loader from '../layout/Loader';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Camera from '../../images/camera.svg';


class Recipe extends React.Component {
	state = {
		currentRecipe: [],
		loading: true
	}

	componentDidMount = async () => {
		const recipeId = this.props.location.state.recipe;
		const apiCall = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
		const response = await apiCall.json();
		
			// console.log(response);
			this.setState({ 
				currentRecipe: response.meals[0],
				loading: false
			});
			 console.log(this.state.currentRecipe);

	}

	render() {
		const current = this.state.currentRecipe; 
		 const videolink = `${current.strYoutube}`;
				const embedlink = videolink.replace('watch?v=', 'embed/');
				//console.log(embedlink);

	// extract all ingredients in an array 
		 const recipeEntries = Object.entries(current);
			//console.log(recipeEntries);

				const ingredientsArr = [];
				recipeEntries.map((item, index) => {
					if ( index >= 8 && index <= 27) {
						ingredientsArr.push(item[1]);
					}
					return ingredientsArr;
				});
				//console.log(ingredientsArr);

	// extract all measures in an array 

				const measuresArr = [];
				recipeEntries.map((item, index) => {
					if ( index >= 28 && index <= 47) {
						 measuresArr.push(item[1]);
					}
					return measuresArr;
				});
				console.log(measuresArr);

		return (
		<div>
			<Header />
			{ 
				( this.state.currentRecipe.length !== 0 && !this.state.loading ) ?
				(<div className="recipe-details">
					<div className="heading-container">
						<h2 className="recipe-title">
									Full Recipe: <span>"{current.strMeal}"</span> 
						</h2>
					</div>
					<div className="recipe-details--item">
					<div className="recipe-details--item__block1">
						<div className="recipe-details-img">
							<LazyLoad>
								<img src={current.strMealThumb}  alt={current.strMeal} />
							</LazyLoad>
						</div>
						<div className="recipe-details-subtitles">
							<div className="recipe-details-subtitles__inner">
								<p> Meal Category:
									<span> {current.strCategory}</span>
								</p>
								<p> Recipe Origin: 
									<span> {current.strArea} </span>
								</p>
							</div>
						</div>
					 	<div className="recipe-details-instructions">
					 		<h4>Instructions:</h4>
							<p> {current.strInstructions}</p>
						</div>
					</div>
						<div className="recipe-details--item__block2">
							<div className="recipe-details--ingredients">
								<h4>Ingredients: </h4>
								<div className="ingredients-container" >
									 <ul className="recipe-ingredients-list">
										{
											ingredientsArr.map((ingredient, index) => {
												const imgSource = `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`;
												if (ingredient !== "") {
													return <li key={ingredient + index}>
																<LazyLoad>
																	<img src={imgSource} alt={ingredient} className="ingredient-img"/>
																</LazyLoad>
																<span>{ingredient}</span>
															</li>
												} else {
													return false;
												}
											 })

										}

									 </ul>
									 <ul className="recipe-measures-list">
										{
											measuresArr.map((measure, index) => {
												if (measure !== "") {
													return <li key={index}>
																<span>{measure}</span>
															</li>
												} else {
													return false;
												}
											 })

										}

								 	</ul>
							 	</div>
							</div>
					 	</div>
					 	<div className="recipe-details--item__block3">	
							<div className="recipe-details-video">
								<div className="recipe-details-video__header">
									<h4><img src={Camera} alt="Camera icon" />Recipe Video</h4>
									<div className="recipe-details-button">
										<div className="home-button"> 
											<Link to="/">
												<span>Back to homepage</span>
											</Link>
										</div>
									</div>
								</div>
								<div className="iframe-holder">
									<iframe title={current.strMeal} src={embedlink}></iframe> 
								</div>
							</div>

						</div>
					</div>
				</div>) :
				<Loader />
			}
			<Footer />
			</div>

		);
	}


}


export default Recipe;


