import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DefaultPage from './Pages/DefaultPage';
import MenuPage from './Pages/MenuPage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import CartPage from './Pages/CartPage';

class App extends Component {
    render() {
        return ( 
			<>
				<Navbar />
				<Switch>
					<Route path='/' exact component={HomePage} />
					<Route path='/menu' exact component={MenuPage} />
					<Route path='/contact-us' exact component={ContactPage} />
					<Route path='/about' exact component={AboutPage} />
					<Route path='/cart' exact component={CartPage} />
					<Route component={DefaultPage} />
				</Switch>
				<Footer />
            </>
        )
    }
}

export default App;