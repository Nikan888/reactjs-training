import React, { Component } from "react";
import "./App.css";
import MainHeader from "../components/MainHeader";
import CardList from "../components/CardList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../components/Auth";
import NotFound404 from "../components/NotFound404";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <MainHeader />
          <Switch>
            <Route path="/" exact component={CardList} />
            <Route path="/auth" exact component={Auth} />
            <Route component={NotFound404} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
