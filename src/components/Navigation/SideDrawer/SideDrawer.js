import React from 'react';
import Logo from '../../Logo/Logo';
import NavigtionItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = (props) => (
    <div className={classes.SideDrawer}>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav>
            <NavigtionItems/>
        </nav>
    </div>
)

export default sideDrawer;