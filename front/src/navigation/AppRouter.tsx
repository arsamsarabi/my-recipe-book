import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Layout, Loading } from '../components'
import PrivateRoute from './PrivateRoute'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { routes } from './routes'

const Dashboard = lazy(() => import('../screens/Dashboard'))
const Ingredients = lazy(() => import('../screens/Ingredients'))
const AddIngredient = lazy(() => import('../screens/AddIngredient'))
const Login = lazy(() => import('../screens/Login'))

const AppRouter = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<Loading />}>
          <Layout>
            <Switch>
              <PrivateRoute path={routes.DASHBOARD}>
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute path={routes.INGREDIENTS}>
                <Ingredients />
              </PrivateRoute>
              <PrivateRoute exact path={routes.ADD_INGREDIENT}>
                <AddIngredient />
              </PrivateRoute>
              <Route exact path={routes.REGISTER}>
                <div>register screen goes here!</div>
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
