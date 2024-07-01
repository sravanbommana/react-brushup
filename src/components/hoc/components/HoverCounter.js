import React, { Component } from 'react'
import withCounter from '../withCounter';

export class HoverCounter extends Component {
  render() {
    return (
      <div>
        <div>Count: {this.props.count}</div>
        <div>
          <button onMouseOver={this.props.incrementHandler}>Increment Count</button>
        </div>
      </div>
    )
  }
}

export default withCounter(HoverCounter);
