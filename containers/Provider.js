import React, {Component} from 'react'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import logger from 'redux-logger'
import { persistStore, autoRehydrate } from 'redux-persist'
import { Provider as ReduxProvider } from 'react-redux'

import Root from './Root'
import * as reducers from '../reducers'

const reducer = combineReducers(reducers)
const finalCreateStore = compose(
  applyMiddleware(logger({collapsed: true})),
  autoRehydrate(),
  createStore
)
const store = finalCreateStore(reducer)
window.store = store

// import {createGeometer} from 'geometer'
// const geometer = createGeometer(db, {precision: 32})

export default class Provider extends Component {
  state={initialized: false}

  propTypes: {
    history: PropTypes.object.isRequired,
  }

  componentWillMount() {
    persistStore(store, {}, () => {
      this.setState({initialized: true})
    })
  }

  render() {
    if(!this.state.initialized){ return <div>loading...</div> }

    let history = this.props.history
    return (
      <div>
        <ReduxProvider store={store}>
          {() =>
            <Root history={history} />
          }
        </ReduxProvider>
      </div>
    )
  }

}
