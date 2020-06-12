import React, { Component } from "react";
import "./App.css";
import MainHeader from "../components/MainHeader/MainHeader";
import CardList from "../components/CardList/CardList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <CardList />
      </div>
    );
  }
}

export default App;
