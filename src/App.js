import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Review from "./components/Review";
export const REQUEST_ENDPOINT = 'http://localhost:8080/mystore/'


export default function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path='/' exact>
                    <Products />
                </Route>
                <Route path='/review' exact>
                    <Review />
                </Route>
            </Switch>
        </Router>
    );

}


// When a <Route> matches, it will pass the context object to the component it renders as the staticContext prop