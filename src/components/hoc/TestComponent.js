import React, { Component } from 'react'
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

export class TestComponent extends Component {
  render() {
    return (
      <div>
        <div><ClickCounter /></div>
        <div><HoverCounter /></div>         
      </div>
    )
  }
}

export default TestComponent;
