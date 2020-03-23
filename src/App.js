import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RankPage from "./components/Rank";
import FAQPage from "./components/FAQ";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./config/theme";
import { GlobalStyles } from "./config/global";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Router>
          <Header setTheme={setTheme} />
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
            <Route path="/faq">
              <FAQPage />
            </Route>
          </Switch>
          <Footer theme={theme} setTheme={setTheme} />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
