import React, { Component, PropTypes } from 'react'
import PhotoGrid from './components/PhotoGrid';//具体到文件
// import "./css/photo.css"
class ChildComponent extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
       <PhotoGrid number="1"/>
       <PhotoGrid number="2"/>
       <PhotoGrid number="3"/>
       <PhotoGrid number="4"/>
       <PhotoGrid number="5"/>
       <PhotoGrid number="8"/>
      </div>
    )
  }
}

// ChildComponent.propTypes = {

// }

export default ChildComponent
