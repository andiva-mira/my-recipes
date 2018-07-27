import React, { Component } from 'react';
import './styles/css/App.css';
import HeaderHome from './components/layout/HeaderHome';
import Loader from './components/layout/Loader';
import Footer from './components/layout/Footer';
import Categories from './components/categories/Categories';
import Recipes from './components/recipes/Recipes';


class App extends Component {

	state = {
		recipes: [],
		categories: [],
		loading: true
	}


	getRecipe =  () => {
		fetch(`https://www.themealdb.com/api/json/v1/1/latest.php`)
		  .then(response => response.json())
		  .then(data => {
			const recipes = data.meals;
			//console.log(data.meals);
			this.setState({
			  recipes: recipes
			});
			//console.log(this.state.recipes);
		  })
		  .catch(error => {
			console.log('Error fetching and parsing data', error);
		  });

	}

	getCategories =  async () => {
		const apiCall = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
		const response = await apiCall.json();
		const categories = response.categories;
		//console.log(categories);
		this.setState({
			categories: categories,
			loading: false
		});

		//console.log(this.state.categories);

	}

	componentDidMount() {
			this.getRecipe();
			this.getCategories();
	}

	  render() {
		return (
		  <div className="App">
			<HeaderHome />
			<div className="home-container">		
			{
				(this.state.loading) ? <Loader /> :  <Categories categories={this.state.categories} /> 

			}

			<Recipes  recipes= {this.state.recipes}/>
			 </div>
			 <Footer />
		  </div>
		);
	  }
}

export default App;



 
