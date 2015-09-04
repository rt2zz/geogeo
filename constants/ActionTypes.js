import _ from 'lodash'
const actions = [
  'TEST',
  'ADD_POINT',
  'ADD_POINT_SUCCESS',
  'ADD_POINT_FAIL',
]
export default _.indexBy(actions)
