import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import primeActions from '../actions/primeActions'

@connect(
  null,
  (dispatch) => ({actions: bindActionCreators(primeActions, dispatch)})
)
export default class TestPage extends Component {

  state={
    lat: "",
    lon: ""
  }

  submit(){
    this.props.actions.ADD_POINT({
      lat: this.state.lat,
      lon: this.state.lon,
    })
  }

  render() {
    return (
      <div>
        abasd
        <input type="text" placeholder="lat" value={this.state.lat} onChange={(event) => {this.setState({lat: event.target.value})}} />
        <input type="text" placeholder="lon" value={this.state.lon} onChange={(event) => {this.setState({lon: event.target.value})}} />
        <div onClick={::this.submit}>Submit</div>
      </div>
    )
  }
}
