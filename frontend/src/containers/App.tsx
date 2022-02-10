import '../styles/App.css';
import {Route, Switch} from 'react-router-dom'
import {homepage} from "./homepage";
import * as React from "react";

export const App: React.FC = () => {
  return (
      <Switch>
        <Route path="/" component={homepage}/>
        <Route path="/home"component={homepage}/>
        <Route path="/menu" component={homepage}/>
        <Route path="/confirm" component={homepage}/>
        <Route path="/shoppingcart" component={homepage}/>
      </Switch>
  );
}
