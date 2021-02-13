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
  },
  submit:{
    marginTop: 30,
    marginLeft:10
  }
}));

export default function ButtonAppBar(props) {
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
      <Typography  variant="h6" className={classes.text}>
           Question 1: Lorem ipsum dolor sit amet.
          </Typography>
        <TextField 
        className={classes.text} 
        id="standard-basic" 
        label="Answer"
        onChange={props.q1}
         ></TextField>
        <br/>
        <Typography variant="h6" className={classes.text}>
           Question 2: Lorem ipsum dolor sit amet.
          </Typography>
        <TextField 
        className={classes.text} 
        id="standard-basic" 
        label="Answer"
        onChange={props.q2}
         ></TextField>
        <br/>
        <Button 
        className={classes.text}
        variant="contained"
        color="primary"
        onClick={props.dec}
        >Back</Button>
        <Button 
        className={classes.submit}
        variant="contained"
        color="primary"
        onClick={props.submit}
        >Submit</Button>
    </div>
  );
}
