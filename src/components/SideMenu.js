import React from 'react'
import { withStyles } from '@material-ui/styles';
// import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';


// withStyles & makeStyles

const style = {
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: 0,
    width: '320px',
    height: '100%',
    backgroundColor: '#253053'
  }
}

const SideMenu = (props) => {

  const { classes } = props;

  return (
    <div className={classes.sideMenu}>SideMenu</div>
  )
}

export default withStyles(style)(SideMenu);
