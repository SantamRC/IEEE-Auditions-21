import React from 'react';
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

export default function ButtonAppBar(props) {
  const classes = useStyles();
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
           Question 4: Rate yourself out of 10.
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
        onClick={props.step}
        >Next</Button>
        </Container>
    </div>
  );
}
