import React, {Component} from 'react'

const withCounter = (WrappedComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    incrementHandler = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1
        }
      });
    }
    
    render() {
      return (
        <WrappedComponent count={this.state.count} incrementHandler={this.incrementHandler}/>
      )
    }
  }
  return NewComponent;
}

export default withCounter
