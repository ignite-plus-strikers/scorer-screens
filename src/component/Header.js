import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import appbar from '../assests/appbar.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar:{
      backgroundImage:"src/assests/appbar.png",
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <img src={appbar} align="left" style={{height:70,width:1260,marginLeft:0}}/>
          <Button variant="contained" color="primary" position="absolute" startIcon={<AccountCircleIcon />}> Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
