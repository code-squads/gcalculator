import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CalculatorPage from "./CalculatorPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/calculator" component={CalculatorPage} exact />
      </Switch>
    </Router>
  );
};

export default App;
