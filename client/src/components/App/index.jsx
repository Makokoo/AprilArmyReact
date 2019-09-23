import React from 'react';
import { BrowserRouter, withRouter, Switch, Route } from 'react-router-dom'

import 'jquery'
import Home from '../Home';
import Discussion from '../Discussion'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/discussion" component={Discussion} />
      </Switch>
    </BrowserRouter>
  );
}

export default withRouter(App);
