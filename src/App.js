import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import Parent from './Component/Class/Parent';
//import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import Homepage from './Component/Fungsional/HomePage';
import AboutComp from './Component/Fungsional/AboutComp';
import DetailComp from './Component/Fungsional/DetailComp';
import { Form } from 'reactstrap';
//import logo from './logo.svg';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class?Beranda';
// import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <NavbarComp/>
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/about" component={AboutComp}/>
      <Route exact path="/detail/:id" component={DetailComp}/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
