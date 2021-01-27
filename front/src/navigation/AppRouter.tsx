import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Layout, Loading } from '../components'
import PrivateRoute from './PrivateRoute'
import { useAuthContext } from '../context'

const Dashboard = lazy(() => import('../screens/Dashboard'))
const Login = lazy(() => import('../screens/Login'))

const AppRouter = () => {
  const { user, isAuthenticated } = useAuthContext()

  console.log('isAuthenticated', isAuthenticated)

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Switch>
            <PrivateRoute
              path="/dashboard"
              component={Dashboard}
              user={user}
              isAuthenticated={Boolean(isAuthenticated)}
            />

            <PrivateRoute
              path="/about"
              user={user}
              isAuthenticated={Boolean(isAuthenticated)}
            >
              <div>Hello about!</div>
            </PrivateRoute>

            <PrivateRoute
              path="/topics"
              user={user}
              isAuthenticated={Boolean(isAuthenticated)}
            >
              <div>Hello topics!</div>
            </PrivateRoute>

            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>

            <Route path="/register">
              <div>Hello topics!</div>
            </Route>

            <Route path="/login" component={Login} />
          </Switch>
        </Layout>
      </Suspense>
    </Router>
  )
}

export default AppRouter
