import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { ActionTypes } from '../registry'

@connect(
  state => ({...state.app})
)
export default class App extends Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
