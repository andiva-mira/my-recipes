import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import App from '../App';
import Recipe from './recipes/Recipe';
import Category from './categories/Category';

const Router = () => (
	<HashRouter>
		<Switch>
			<Route path="/" component={App} exact />
			<Route path="/recipe=:title" component={Recipe} />
			<Route path="/category=:title" component={Category} />
		</Switch>
	</HashRouter>

);

export default Router;