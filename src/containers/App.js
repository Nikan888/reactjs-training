import React from "react";
import "./App.css";
import MainHeader from "../components/MainHeader";
import CardList from "../components/CardList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../components/Auth";
import NotFound404 from "../components/NotFound404";
import SingleCard from "../components/SingleCard";
import ContentLoader from "../components/ContentLoader";
import Settings from "../components/Settings";
import { useSelector } from "react-redux";

function App() {
  const isAdmin = useSelector((state) => state.userReducer.isAdmin);
  return (
    <div className="App">
      <ContentLoader>
        <Router>
          <MainHeader />
          <Switch>
            <Route path="/" exact component={CardList} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/card/:id" component={SingleCard} />
            {isAdmin && <Route path="/settings" component={Settings} />}
            <Route component={NotFound404} />
          </Switch>
        </Router>
      </ContentLoader>
    </div>
  );
}

export default App;
