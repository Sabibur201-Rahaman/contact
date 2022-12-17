import React, { Component } from "react";
import Contacts from "./Contacts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import ContactDetails from "./ContactDetails";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/contacts/:id">
            <ContactDetails />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          {/* <Route to="/contacts"></Route> */}
        </Switch>
      </Router>
    );
  }
}
