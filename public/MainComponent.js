import React, { Component, PropTypes } from 'react'
// import { Jumbotron } from 'react-bootstrap'
import MyNav from './components/Nav'
import styles from './css/main.css';
class MainComponent extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <MyNav/>
        <div className={styles.container}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

// MainComponent.propTypes = {

// }

export default MainComponent
