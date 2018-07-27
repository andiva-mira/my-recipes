import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from '../App';
import Recipe from './recipes/Recipe';
import Category from './categories/Category';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={App} exact />
			<Route path="/recipe=:title" component={Recipe} />
			<Route path="/category=:title" component={Category} />
		</Switch>
	</BrowserRouter>

);

export default Router;