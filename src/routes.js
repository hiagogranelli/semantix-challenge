import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import PageTwo from "./Pages/PageTwo";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/page-two" component={PageTwo} />
    </Switch>
  );
}
