import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import { App } from './components'

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
