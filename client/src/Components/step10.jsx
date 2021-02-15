import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Lottie from 'react-lottie';
import success from '../Animations/5047-success.json'

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
  },
  lottie:{
    position:'absolute'
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const [stop,setStop]=useState(false);
  const [pause,setPause]=useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: success,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const submit=()=>{
    setStop(false);
    setPause(false);
    props.sub()
  }

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
           Question 6: There is an event on Wed development on 15th November at LG 22. Prepare a write up 
           of 3-4 sentences that could be used for publicity of the event. Come with a name for the event.
            You can mention one or two activities that may be in the event.
          </Typography>
        <TextField 
        className={classes.text} 
        id="standard-basic" 
        label="Answer"
        onChange={props.q6}
         ></TextField>
         <Lottie 
              className={classes.lottie}
              options={defaultOptions}
              height={400}
              width={400}
              isStopped={stop}
              isPaused={pause}
            />
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
        onClick={submit}
        >Submit</Button>
        </Container>
    </div>
  );
}
