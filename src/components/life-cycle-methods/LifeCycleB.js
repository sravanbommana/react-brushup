import React, { Component } from 'react'
/*************************************************************************************************************
 * We can classify life cycle methods in four phases
 * Mounting - when an instance of component is being created and inserted into DOM
 * Updating - When a component is being re-rendered as a result of changes to either it's props or states 
 * UnMounting - When a component is being removed from DOM
 * Error Handling - When there is an error during rendering, in a lifecycle method, or in the constructor 
 *        of any child component
 * **********************************************************************************************************************/

 // Mounting - constructor, getDerivedStateFromProps, render and componentDidMount
 // Updating - getDerivedStateFromProps, shouldComponentUpdate, render, getSanpshotBeforeUpdate and componentDidUpdate
 // UnMounting - componentWillUnmount
 // Error Handling - getDerivedStateFromErrors and componentDidCatch

 class LifeCycleB extends Component {
  //Do not use for side effects like HTTP requests
  constructor(props) {
    super(props)
    console.log("LifeCycleB ::  Inside Constructor");
    this.state = {
       count:0
    }
  }

  componentDidMount() {
    console.log("LifeCycleB :: Inside componentDidMount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifeCycleB :: Inside componentDidUpdate");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleB :: Inside shouldComponentUpdate");
    return true;
  }

  componentWillUnmount() {
    console.log("LifeCycleB :: Inside componentWillUnmount");
  }

  componentDidCatch() {
    console.log("LifeCycleB :: Inside componentDidcach");
    return null;
  }

  // Use when the state of component depends on changes in props over time
  // Do not use this for side effects
  // Do not this.setState inside this method
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB :: Inside getDerivedStateFromProps");
    return null;
  }

  static getDerivedStateFromError(error) {
    console.log("LifeCycleB :: Inside getDerivedStateFromError");
    return null;
  }

  //called right before the changes from the virtual DOM are to be reflected in the DOM
  // Capture some information from the DOM
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleB :: Inside getSnapshotBeforeUpdate");
  }
  
  // This is mandatory method
  // Inside render we can read props and state and return jsx
  // Do not change state or interact with DOM or make ajax calls
  // Children component life cycle methods also executed
  render() {
    console.log("LifeCycleB :: Inside Render");
    return (
      <div>
        LifeCycleB
      </div>
    )
  }
}

export default LifeCycleB
