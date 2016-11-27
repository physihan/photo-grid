import React, { Component, PropTypes } from 'react'

class MainComponent extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
      <h1>this is main</h1>
        {this.props.children}
      </div>
    )
  }
}

// MainComponent.propTypes = {

// }

export default MainComponent
