import React from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RankPage from "./components/Rank";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/rank">
            <RankPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
