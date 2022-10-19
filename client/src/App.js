import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomeComponent from "./components/HomeComponent";
import FavoritesComponent from "./components/FavoritesComponent";

function App() {
  return (
	<Router>
		<Routes>
			<Route exact path='/' element={<HomeComponent />}></Route>
			<Route exact path='/favorites' element={<FavoritesComponent />}></Route>
		</Routes>
   </Router>
  );
}

export default App;
