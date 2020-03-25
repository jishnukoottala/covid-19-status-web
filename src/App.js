import React from "react";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RankPage from "./components/Rank";
import FAQPage from "./components/FAQ";
import WorldStatus from "./components/WorldStatus";
import Sources from "./views/Sources";

import { ThemeProvider } from "styled-components";
import { useThemeMode } from "./config/themeMode";
import { lightTheme, darkTheme } from "./config/theme";
import { GlobalStyles } from "./config/global";
import { useCacheBuster } from "./CacheBuster";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [theme, toggleTheme, componentMounted] = useThemeMode();
  const [loading, isLatestVersion, refreshCacheAndReload] = useCacheBuster();

  if (!componentMounted) {
    return <div />;
  }
  if (loading) {
    return null;
  }
  if (!loading && !isLatestVersion) {
    refreshCacheAndReload();
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
            <Route path="/sources">
              <Sources />
            </Route>
          </Switch>
          <Footer theme={theme} toggleTheme={toggleTheme} />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
