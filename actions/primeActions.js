import ActionTypes from '../constants/ActionTypes'
import {createAction} from 'redux-actions'

import _ from 'lodash'

let primeActions = _.mapValues(ActionTypes, createAction)
export default primeActions
