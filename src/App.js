import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Review from "./components/Review";
import Home from "./components/Home";
import Paypal from "./components/Paypal";
import StoreManager from "./components/merchant/StoreManager";
import Footer from "./components/Footer";
export const REQUEST_ENDPOINT = 'http://localhost:8080/mystore/'


export default function App() {
    return (
        <Router>
            <switch>
                <Route>
                    <Switch>
                        <Route path='/' exact >
                            <Header/><Products/><Footer/>
                        </Route>
                        <Route path='/home' exact>
                            <Header/><Home/><Footer/>
                        </Route>
                        <Route path='/products' exact>
                            <Header/><Products/><Footer/>
                        </Route>
                        <Route path='/review' exact>
                            <Header/><Review/><Footer/>
                        </Route>

                    </Switch>
                </Route>

                <Route>
                    <Route path='/storeManager' exact>
                        <StoreManager />
                    </Route>
                </Route>
            </switch>



        </Router>

    );
}


// When a <Route> matches, it will pass the context object to the component it renders as the staticContext prop