import React, { useEffect, useState } from "react";
import "./App.css";


import Otp from "./components/Otp";
//import ExternalInfo from "components/ExternalInfo";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import SignIn from "./components/SignIn";
import Home from "./components/Home";

const App = () => {
  

  return (
    <Router>
      <div id="recaptcha-container"></div>
      <Switch>
        <Route path="/" exact>
          <SignIn/>
      
        </Route>
        <Route path="/signin" exact>
          <Otp />
        </Route>
        <Route path="/home" exact>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
