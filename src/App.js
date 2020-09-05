import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "./Home";
import logo from './logo.svg';
import './App.css';
export const REQUEST_ENDPOINT = 'http://localhost:8080/api/'


function App() {
  return (
      <Home/>
  );
}

export default App;
