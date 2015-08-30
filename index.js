import 'babel-core/polyfill'
import React from 'react'
import Provider from './containers/Provider'
import BrowserHistory from 'react-router/lib/BrowserHistory'

React.render(
  <Provider history={new BrowserHistory()} />,
  document.getElementById('root')
)
