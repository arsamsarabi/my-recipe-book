import React, { FC } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import {useAuth} from "../hooks/useAuth";

const PrivateRoute = (props:RouteProps) => {
  const { isAuthenticated } = useAuth()
  if (isAuthenticated) {
    console.log('isAuthenticated', isAuthenticated)
    console.log(props)
    return <Route {...props}/>
  }

  return (
    <Route >
      <Redirect to="/login" />
    </Route>
  )
}

export default PrivateRoute
