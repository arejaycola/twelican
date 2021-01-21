import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Main';
import Navbar from './Navbar';
import SecondPage from './SecondPage';
/* Testing deployment */

const App = () => {
	return (
		<>
			<Navbar />
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Main}></Route>
					<Route path="/second-page" component={SecondPage}></Route>
				</Switch>
			</BrowserRouter>
		</>
	);
};
export default App;
