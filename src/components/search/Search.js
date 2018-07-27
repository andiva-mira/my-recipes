import React from 'react'; 


const Search = (props) => {
	return (
		<div>
			<form onSubmit={props.getRecipeSearch} >
				<input className="search-input" type="text" name="ingredient" placeholder="type an ingredient, e.g. chicken"/>
				<button  className="search-button">
					<span>Search</span>
				</button>
			</form>
	 	</div>
	);
}

export default Search;