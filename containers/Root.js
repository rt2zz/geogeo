import React, { Component, PropTypes } from 'react'
import { Router, Route } from 'react-router'

import App from './App'
import TestPage from './TestPage'

export default class Root extends Component {

  propTypes: {
    history: PropTypes.object.isRequired,
  }

  render(){
    return (
      <Router history={this.props.history}>
        <Route path="/" component={App}>
          <Route path="test" component={TestPage} />
        </Route>
      </Router>
    )
  }
}
