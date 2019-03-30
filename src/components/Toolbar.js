
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CameraIcon from '@material-ui/icons/PhotoCamera';

const styles = theme => ({
    appBar: {
      position: 'relative',
    },
    icon: {
      marginRight: theme.spacing.unit * 2,
    },
  });

  function PageToolbar(props) {
    const { classes } = props;
    <AppBar position="static" className={classes.appBar}>
        <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
                Album layout
            </Typography>
        </Toolbar>
    </AppBar>
}
export default (PageToolbar);