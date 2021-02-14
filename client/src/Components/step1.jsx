import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


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
  radio:{
    marginTop: 30,
    display:"flex",
    flexDirection:"horizontal"
  }
}));

export default function Step1(props) {
  const classes = useStyles();
  const [value, setValue] = useState(1);
  const [dept,setDept]=useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const changeDept=(e)=>{
    setDept(e.target.value);
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
        <FormControl className={classes.radio} component="fieldset">
          <FormLabel component="legend">Department</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={dept} onChange={changeDept} >
            <FormControlLabel value="ce" control={<Radio />} label="CE" />
            <FormControlLabel value="ch" control={<Radio />} label="CH" />
            <FormControlLabel value="bt" control={<Radio />} label="BT" />
            <FormControlLabel value="ece" control={<Radio />} label="ECE" />
            <FormControlLabel value="cse" control={<Radio />} label="CSE" />
            <FormControlLabel value="ee" control={<Radio />} label="EE" />
            <FormControlLabel value="me" control={<Radio />} label="ME" />
            <FormControlLabel value="mme" control={<Radio />} label="MME" />
            <FormControlLabel value="chem" control={<Radio />} label="CHEM" />
          </RadioGroup>
        </FormControl>
        <br/>
        <FormControl className={classes.text} component="fieldset">
          <FormLabel component="legend">Year of Study</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} >
            <FormControlLabel value="1" control={<Radio />} label="1st Year" />
            <FormControlLabel value="2" control={<Radio />} label="2nd Year" />
          </RadioGroup>
        </FormControl>
      <br/>
        <Button 
        className={classes.text}
        variant="contained"
        color="primary"
        onClick={props.step}
        >Next</Button>
        </Container>
    </div>
  );
}
