import React, {PropTypes} from 'react'
import {Button} from 'react-bootstrap';
// import main.css from './css';
import styles from "./css/photo.css"

const PhotoGrid = props => {
    return (
        <div>
            <div className={styles.grid+"col-md-4"}> 
                <div className="well" >
                <h1>{props.number}</h1>
                    <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
                    <Button bsSize="large" block>Block level button</Button>
                </div>
            </div>
        </div>
    )
}

PhotoGrid.propTypes = {
    
}

export default PhotoGrid