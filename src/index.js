import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dahsboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SigIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./components/store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
