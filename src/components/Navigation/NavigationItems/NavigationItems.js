import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Home</NavigationItem>
        <NavigationItem link="/">About</NavigationItem>
        <NavigationItem link="/">Categories</NavigationItem>
        <NavigationItem link="/">Contact Us</NavigationItem>
    </ul>
)

export default navigationItems;