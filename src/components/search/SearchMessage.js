import React from 'react';

const SearchMessage = props => {

	return (
		<div>
			{props.searchMessage.length !== 0 &&
				<div className="search-message">
					<p>{props.searchMessage}</p>
					<button onClick={props.closeSearchMessage} className="search-message--close"> <span>close</span></button>
				</div>
			}
		</div>

	);

}

export default SearchMessage;