import React from "react";
import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./pages/index.js";
import SigninPage from "./pages/signin.js";

function App() {
  return (
    <Router>
      <Switch>
          <Route path='/' component={Home}  />
          <Route path='/signin' component={SigninPage} />
      </Switch>
    </Router>
  );
}

export default App;
