import React, {PropTypes,Component} from 'react'
import {Col,Thumbnail,Button,Badge} from 'react-bootstrap';
// import main.css from './css';
import styles from "../css/photo.css"

class PhotoGrid extends Component{
    constructor (props) {
    super(props)
    // this.add=this.add.bind(this)
    
    this.state={
        cnt:0
    }
  }

  add(){
    //   var cnt=this.state.cnt+1
    //   this.setState({
    //       cnt:cnt
    //   })
    alert("sss")
    console.log(PhotoGrid.prototype)
  }
    render(){
        return(
            
        <Col xs={12} md={4} className={styles.grid}>
            <Thumbnail src="/static/img/123.jpg">
            <h3>小猫</h3>
                    <p><Badge>{this.state.cnt}</Badge></p>
                    <p>
                    <Button bsStyle="primary" onClick={this.add}>喜欢</Button>&nbsp;
                    <Button bsStyle="default">讨厌</Button>
                    </p>
            </Thumbnail>
        </Col>
        )
    }
}
// const PhotoGrid = props => {
//     return (
     
//         <Col xs={12} md={4} className={styles.grid}>
//             <Thumbnail src="/static/img/123.jpg">
//             <h3>小猫</h3>
//                     <p><Badge>12</Badge></p>
//                     <p>
//                     <Button bsStyle="primary">喜欢</Button>&nbsp;
//                     <Button bsStyle="default">讨厌</Button>
//                     </p>
//             </Thumbnail>
//         </Col>
           

       
//     )
// }
// 这里className如果要拼接' col-md-4'的话不要丢了空格

PhotoGrid.propTypes = {
    
}

export default PhotoGrid