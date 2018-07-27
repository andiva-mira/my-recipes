import React from 'react';
import Loader from '../layout/Loader';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import CategoryList from './CategoryList';

class Category extends React.Component {
	state = {
		currentCategory: [],
    loading: true
	}

  componentDidMount = () => {
    const categoryName = this.props.location.state.category;
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
        .then(response => response.json())
        .then(data => {         
          //console.log(data);
          this.setState({
            currentCategory: data.meals,
            loading: false
          });
          //console.log(this.state.currentCategory);
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
  }


	render() {

		return (
      <div>
      <Header />
		
			{ (this.state.currentCategory.length !== 0 && !this.state.loading ) ?
        (<div className="category-list-container">
          <div className=" heading-container">
            <h2 className="current-category-title">{this.props.location.state.category} Recipes</h2>
          </div> 				        
          <CategoryList list={this.state.currentCategory} loading={this.state.loading} />
        </div>) : <Loader />  		
			}

		  <Footer />
      </div>
		);
	}

}


export default Category;


