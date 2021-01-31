import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { useAuth } from '../hooks'

const PrivateRoute = (props: RouteProps) => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Route {...props} />
  }

  return (
    <Route>
      <Redirect to="/login" />
    </Route>
  )
}

export default PrivateRoute
