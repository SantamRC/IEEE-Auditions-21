import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  text:{
    marginTop: 30,
  }
}));

export default function Step1(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            IEEE Auditions '21
          </Typography>
        </Toolbar>
      </AppBar>
      <TextField 
        className={classes.text} 
        id="standard-basic" 
        label="Enter Full Name" 
        onChange={props.name}
        ></TextField>
        <br/>
        <TextField 
        className={classes.text} 
        id="standard-basic" 
        label="Enter Phone Number"
        onChange={props.phn}
        ></TextField>
        <br/>
        <TextField 
        className={classes.text} 
        id="standard-basic" 
        label="Department"
        onChange={props.dept}
        ></TextField>
        <br/>
        <TextField 
        className={classes.text} 
        id="standard-basic" 
        label="Year of Study" 
        onChange={props.yr}
        ></TextField>
        <br/>
        <Button 
        className={classes.text}
        variant="contained"
        color="primary"
        onClick={props.step}
        >Next</Button>
    </div>
  );
}
