import React from "react";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RankPage from "./components/Rank";
import FAQPage from "./components/FAQ";
import WorldStatus from "./components/WorldStatus";

import { ThemeProvider } from "styled-components";
import { useThemeMode } from "./config/themeMode";
import { lightTheme, darkTheme } from "./config/theme";
import { GlobalStyles } from "./config/global";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [theme, toggleTheme, componentMounted] = useThemeMode();

  if (!componentMounted) {
    return <div />;
  }
  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Router>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/world">
              <WorldStatus />
            </Route>
            <Route path="/country">
              <Dashboard />
            </Route>
            <Route path="/faq">
              <FAQPage />
            </Route>
          </Switch>
          <Footer theme={theme} toggleTheme={toggleTheme} />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
