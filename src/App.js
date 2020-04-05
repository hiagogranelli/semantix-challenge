import React from "react";
import { Router } from "react-router-dom";
import history from "./Services/history";

import GlobalStyle from "./Styles/Global";
import Routes from "./routes.js";

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
