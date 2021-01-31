import React from 'react'
import ReactDOM from 'react-dom'
import '@hookstate/devtools'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
// Removed strict mode because of https://github.com/mui-org/material-ui/issues/20708


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
