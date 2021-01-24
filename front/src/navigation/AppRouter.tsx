import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Layout } from '../components'

export const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/about">
            <div>Hello about!</div>
          </Route>
          <Route path="/topics">
            <div>Hello topics!</div>
          </Route>
          <Route path="/">
            <div>Hello home!</div>
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}
