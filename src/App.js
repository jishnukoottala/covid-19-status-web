import React from "react";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RankPage from "./components/Rank";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/world">
            <RankPage />
          </Route>
          <Route path="/country">
            <Dashboard />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
