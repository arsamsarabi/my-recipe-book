import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export const AuthRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <div>Hello about!</div>
        </Route>
        <Route path="/register">
          <div>Hello topics!</div>
        </Route>
        <Route path="/">
          <div>Hello home!</div>
        </Route>
      </Switch>
    </Router>
  )
}
