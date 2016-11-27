import React, {PropTypes} from 'react'
// import {Button} from 'react-bootstrap';
// import main.css from './css';
import styles from "../css/photo.css"

const PhotoGrid = props => {
    return (
        <div> 
            <div className={styles.grid+' col-md-4'}> 
               <img src="/static/img/123.jpg" alt=""/>
            </div>
        </div>
    )
}
// 这里className如果要拼接的话不要丢了空格

PhotoGrid.propTypes = {
    
}

export default PhotoGrid