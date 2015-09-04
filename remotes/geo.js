import ActionTypes from '../constants/ActionTypes'
import {createGeometer} from 'geometer'
import leveljs from 'level-js'
import readydevice from 'readydevice'
import primeActions from '../actions/primeActions'

var db = leveljs('geotest')

var getGeometer = readydevice((ready) => {
  db.open(() => {
    var geometer = createGeometer(db, {precision: 32, geo: true})
    ready(geometer)
  })
})

export default function account({action, getState, finish, dispatch}) {
  switch (action.type) {

  case ActionTypes.ADD_POINT:
    getGeometer((geometer) => {
      var id = Math.floor(Math.random()*9999999)
      var z = Math.random()
      geometer.addPoint(id, [action.payload.lat, action.payload.lon], z, action.payload, (err) => {
        console.log('added!')
        if(err){
          finish(primeActions.ADD_POINT_FAIL({id, pos: action.payload, z}))
          return
        }
        finish(primeActions.ADD_POINT_SUCCESS({id, pos: action.payload, z}))
      })
    })
    return true

  default:
    return false
  }
}
