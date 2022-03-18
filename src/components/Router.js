import React from "react";
import Landing from './Landing'
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path='/restaurant/:restaurantId'component={App}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
