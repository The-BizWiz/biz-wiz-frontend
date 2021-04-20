import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home.js";
import SignUp from "./components/SignUp.js";
import SignIn from "./components/SignIn.js";
// import PersonList from "./components/API.js";
// import * from 'react-bootstrap'

import './App.css';

//landing page
function App() {
  //make a conditional statement to see if user is on the landing page or not
  return (
    <div>
      <Router>
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="#home"><optionHeading>Biz Wiz</optionHeading></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav class="mr-auto">
              <a><Link to="/SearchBusinesses"><landingOptions>Home</landingOptions></Link></a>
              <a><Link to="/register"><landingOptions>Sign up</landingOptions></Link></a>
              <a><Link to="/login"><landingOptions>Sign In</landingOptions></Link></a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
