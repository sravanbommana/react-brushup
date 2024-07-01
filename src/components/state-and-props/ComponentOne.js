import React, { Component } from 'react';
import Counter from './Counter';

class ComponentOne extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  reset = () => {
    this.setState({
      count: 0
    })
  }

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

 render() {
  return (
    <div>
      <Counter count={this.state.count} 
        incrementCount={this.incrementCount} 
        reset={this.reset}
        decrementCount={this.decrementCount} />
    </div>
  )
 }
}

export default ComponentOne;