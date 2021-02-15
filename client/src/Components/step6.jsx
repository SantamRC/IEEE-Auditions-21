import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Image from 'material-ui-image'
import img from '../Assets/ques.png'

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
  image:{
    width:100
  },
  submit:{
    marginTop: 30,
    marginLeft:10
  }
}));

export default function Step6(props) {
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
      <Container maxWidth="sm">
      <Typography  variant="h6" className={classes.text}>
           Question 5: There are 4 people and 4 hats as shown. A can see B and C. B can see C. 
           There is a wall between C and D. 2 hats are white and 2 are black. Who amongst the 4 people would 
           be able to predict the colour of his hat? / riddle 2
          </Typography>
          <Image
          className={classes.image}
            src={img}
            />
        <TextField 
        className={classes.text} 
        id="standard-basic" 
        label="Answer"
        onChange={props.q5}
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
        onClick={props.step}
        >Next</Button>
        </Container>
    </div>
  );
}
