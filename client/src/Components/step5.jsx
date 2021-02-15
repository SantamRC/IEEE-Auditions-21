import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
//import Container from '@material-ui/core/Container';
import { Container, Draggable } from "react-smooth-dnd";
import arrayMove from "array-move";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DragHandleIcon from "@material-ui/icons/DragHandle";


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
  list:{
    maxWidth:1000
  },
  submit:{
    marginTop: 30,
    marginLeft:10
  }
}));

export default function Step5(props) {
  const classes = useStyles();
 
  const [items, setItems] = useState([
    { id: "1", text: "IEEE" },
    { id: "2", text: "Friends" },
    { id: "3", text: "Studies" },
    { id: "4", text: "Any other Tech Club" }
  ]);

  const onDrop = ({ removedIndex, addedIndex }) => {
    setItems(items => arrayMove(items, removedIndex, addedIndex));
  };

  const next=()=>{
    props.step();
    props.q4(`${items[0].text} >${items[1].text} >${items[2].text} >${items[3].text}`);
    console.log(`${items[0].text} >${items[1].text} >${items[2].text} >${items[3].text}`)
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
           Question 4: Arrange in order of priority.
          </Typography>
          <List className={classes.list} >
            <Container  dragHandleSelector=".drag-handle" lockAxis="y" onDrop={onDrop}>
                {items.map(({ id, text }) => (
                <Draggable key={id}>
                    <ListItem>
                    <ListItemText primary={text} />
                    <ListItemSecondaryAction>
                        <ListItemIcon className="drag-handle">
                        <DragHandleIcon />
                        </ListItemIcon>
                    </ListItemSecondaryAction>
                    </ListItem>
                </Draggable>
                ))}
            </Container>
            </List>
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
        onClick={next}
        >Next</Button>
        </Container>
    </div>
  );
}
