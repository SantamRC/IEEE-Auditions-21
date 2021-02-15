import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  text:{
    marginTop: 10,
  },
  slider:{
    marginTop:40
  },
  back:{
      marginTop:30
  },
  submit:{
    marginTop: 30,
    marginLeft:10
  }
}));

export default function Step4(props) {
  const classes = useStyles();
  const [deadlines,setDead]=useState(0);
  const [spon,setSpon]=useState(0);
  const [team,setTeam]=useState(0);
  const [perf,setPerf]=useState(0);
  
  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 10,
      label: '10',
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }

  const next=()=>{
    //props.q3(`${deadlines},${spon},${team},${perf}`)
    props.q3()
    console.log(`${deadlines},${spon},${team},${perf}`)
    props.step()
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
           Question 3: Rate yourself out of 10.
        </Typography>
        <Typography  variant="h6" className={classes.text}>
           a) Meeting deadlines
        </Typography>
        <Slider
        className={classes.slider}
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={1}
        onChange={(e,n)=>{setDead(n)}}
        marks={marks}
        max={10}
        valueLabelDisplay="on"
      />
        <br/>
        <Typography  variant="h6" className={classes.text}>
           b) Spontaneity
        </Typography>
        <Slider
        className={classes.slider}
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={1}
        onChange={(e,n)=>{setSpon(n)}}
        marks={marks}
        max={10}
        valueLabelDisplay="on"
      />
        <br/>
        <Typography  variant="h6" className={classes.text}>
           c) Teamwork
        </Typography>
        <Slider
        className={classes.slider}
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={1}
        onChange={(e,n)=>{setTeam(n)}}
        marks={marks}
        max={10}
        valueLabelDisplay="on"
      />
        <br/>
        <Typography  variant="h6" className={classes.text}>
           d) Performance under stress and pressure
        </Typography>
        <Slider
        className={classes.slider}
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={1}
        onChange={(e,n)=>{setPerf(n)}}
        marks={marks}
        max={10}
        valueLabelDisplay="on"
      />
        <br/>
        <Button 
        className={classes.back}
        variant="contained"
        color="primary"
        onClick={props.dec}
        >Back</Button>
        <Button 
        className={classes.submit}
        variant="contained"
        color="primary"
        onClick={next}
        >Next</Button>
        </Container>
    </div>
  );
}
