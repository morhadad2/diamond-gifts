import React from 'react';
import Logo from '../../assets/images/diamond.jpg';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={Logo} alt="DiamondLogo" />
    </div>
)

export default logo;