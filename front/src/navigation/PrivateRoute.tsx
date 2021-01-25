import React, { FC } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

type PrivateRouteType = RouteProps & {
  isAuthenticated: boolean
  user: any | null
}

const PrivateRoute: FC<PrivateRouteType> = ({
  isAuthenticated,
  user,
  component,
  ...rest
}) => {
  if (isAuthenticated) {
    return <Route {...rest} component={component} user={user} />
  }

  return (
    <Route {...rest}>
      <Redirect to="/login" />
    </Route>
  )
}

export default PrivateRoute
