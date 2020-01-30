import React from "react";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Success from './Success';

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/signin" component={Login} />
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/success" component={Success} />
        </Switch>


      </BrowserRouter>
    </main>
  );
}

export default App;
