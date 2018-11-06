import React from "react";
import ReactDOM from "react-dom";

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./store/reducers";

import "assets/css/material-dashboard-react.css?v=1.5.0";

import indexRoutes from "routes/index.jsx";

const hist = createBrowserHistory();

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route path={prop.path} component={prop.component} key={key} />
          );
        })}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
