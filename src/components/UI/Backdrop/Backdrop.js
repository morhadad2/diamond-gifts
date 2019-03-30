import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClck={props.clicked}></div> : null
);

export default backdrop;