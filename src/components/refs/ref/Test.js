import React, { Component } from 'react'
import GoogleMap from './GoogleMap'

export class Test extends Component {
  render() {
    return (
      <div style={{height:"100%"}}>
        Map Me
        <GoogleMap lat={-34.397} lng={150.644}/>
      </div>
    )
  }
}

export default Test
