import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Layout, Loading } from '../components'
import PrivateRoute from './PrivateRoute'
import { ErrorBoundary } from '../components/ErrorBoundary'

const Dashboard = lazy(() => import('../screens/Dashboard'))
const Login = lazy(() => import('../screens/Login'))

const AppRouter = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<Loading />}>
          <Layout>
            <Switch>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute path="/about">
                <div>Hello about!</div>
              </PrivateRoute>
              <PrivateRoute path="/topics">
                <div>Hello topics!</div>
              </PrivateRoute>
              <Route path="/register">
                <div>Hello topics!</div>
              </Route>
              <Login />
            </Switch>
          </Layout>
        </Suspense>
      </Router>
    </ErrorBoundary>
  )
}

export default AppRouter
