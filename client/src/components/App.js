import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import SecondPage from './SecondPage';

const App = () => {
	return (
		<>
			<Navbar />
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Login}></Route>
					<Route path="/second-page" component={SecondPage}></Route>
				</Switch>
			</BrowserRouter>
		</>
	);
};
export default App;
