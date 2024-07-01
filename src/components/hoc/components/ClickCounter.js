import React, { Component } from 'react'
import withCounter from '../withCounter';

export class ClickCounter extends Component {
  render() {
    return (
      <div>
        <div>Count: {this.props.count}</div>
        <div>
          <button onClick={this.props.incrementHandler}>Increment Count</button>
        </div>
      </div>
    )
  }
}

export default withCounter(ClickCounter);
