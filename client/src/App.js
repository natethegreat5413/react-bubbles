import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'

import BubblePage from './components/BubblePage'
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to='/login'>Login</Link>
          <Link to='/bubble-page'>Bubbles</Link>
        </header>

        {/* <Switch> */}
          <PrivateRoute exact path='/bubble-page' component={BubblePage}/>
          <Route exact path="/login" component={Login} />
          {/* <Route component={Login}/> */}
          {/* 
            Build a PrivateRoute component that will 
            display BubblePage when you're authenticated 
          */}
        {/* </Switch> */}
      </div>
      
    </Router>

  );
}

export default App;
