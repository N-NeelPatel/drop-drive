import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./drop-drive/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/folder/:folderId" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
