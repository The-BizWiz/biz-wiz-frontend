import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Redirect} from 'react-router';
import {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.js";
import SignUp from "./components/SignUp.js";
import SignIn from "./components/SignIn.js";
// import PersonList from "./components/API.js";
// import * from 'react-bootstrap'
import Post from "./components/Post.js";
import "./App.css";
import SearchBusiness from "./components/Search.js";
import NavbarNew from "./components/NavbarNew.js";
import ProfilePage from "./components/ProfilePage.js";
import NavbarLoggedIn from "./components/NavbarLoggedIn";

let isLoggedIn = !window.localStorage.getItem('token') in [null, ''];

//landing page
function App() {

  const [loggedIn, setLoggedIn] = useState(!window.localStorage.getItem('token') in [null, '']);

  useEffect(()=> {
    // if (!loggedIn) {
      console.log(loggedIn)
    // }
  }, [loggedIn])

  //make a conditional statement to see if user is on the landing page or not
  return (
    <div>
      <Router>
        loggedIn ? 
          <NavbarLoggedIn setLoggedIn={setLoggedIn}/>: 
          <NavbarNew setLoggedIn={setLoggedIn} /> 
        <Switch>
          <Route path="/search">
            <SearchBusiness />
          </Route>
          <Route path="/create-post">
            <Post />
          </Route>
          <Route path="/profile/home">
            <ProfilePage />
          </Route>
          <Route path="/register">
            <SignUp  setLoggedIn={setLoggedIn}/>
          </Route>
          <Route path="/login">
            <SignIn setLoggedIn={setLoggedIn}/> 
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
