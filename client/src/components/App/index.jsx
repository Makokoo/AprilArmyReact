import React from 'react';
import { BrowserRouter, withRouter, Switch, Route } from 'react-router-dom'
import {Header} from '..';

import 'jquery'
import Home from '../Home';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default withRouter(App);
