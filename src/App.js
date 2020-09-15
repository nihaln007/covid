import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import World from "./Components/World";
import India from "./Components/India";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact path="/">
              <India />
            </Route>
            <Route path="/india">
              <India />
            </Route>
            <Route path="/world">
              <World />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
