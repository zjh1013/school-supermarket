import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "../view/home/home";
import Login from "../view/login/login";
import Registry from "../view/login/registry";
function FootRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/registry" component={Registry} />
        <Redirect to="/home"></Redirect>
      </Switch>
    </Router>
  );
}
export default FootRouter;
