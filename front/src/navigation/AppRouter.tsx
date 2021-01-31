import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Layout, Loading } from '../components'
import PrivateRoute from './PrivateRoute'
import { ErrorBoundary } from '../components/ErrorBoundary'
import {routesEnum} from './routes'


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
            <PrivateRoute path={routesEnum.DASHBOARD}>
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path={routesEnum.INGREDIENTS}>
              <Ingredients />
            </PrivateRoute>
            <PrivateRoute exact path={routesEnum.ADD_INGREDIENT}>
              <AddIngredient />
            </PrivateRoute>
            <Route exact path={routesEnum.REGISTER}>
              <div>register screen goes here!</div>
            </Route>
          </Layout>
          <Login />
        </Suspense>
      </Router>
    </ErrorBoundary>
  )
}

export default AppRouter
