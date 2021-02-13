import React,{useEffect,useState} from 'react';
import axios from 'axios'; 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
    table: {
        minWidth: 650,
      },
  }));
  

export default function Admin() {
    const classes = useStyles();
    let [rows,setData]=useState([{}]);

    useEffect(()=>{
        axios.post(process.env.RESPONSES,)
        .then(res=>{
            res.data.forEach(e=>{
                setData(rows=>[...rows,
                {
                    'Name':e.Name,
                    'Phone':e.Phone,
                    'Dept':e.Dept,
                    'Year':e.Year,
                    'Q1':e.Q1,
                    'Q2':e.Q2
                }
                ])
                console.log(e.Name)
            })
            //setData(data=>[...data,res.data])
            
        })
    },[])

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Admin Dashboard
                </Typography>
                </Toolbar>
            </AppBar>
            <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Phone Number</TableCell>
                    <TableCell align="right">Department</TableCell>
                    <TableCell align="right">Year</TableCell>
                    <TableCell align="right">Q1</TableCell>
                    <TableCell align="right">Q2</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row,ind) => (
                    <TableRow key={ind}>
                    <TableCell component="th" scope="row">
                        {row.Name}
                    </TableCell>
                    <TableCell align="right">{row.Phone}</TableCell>
                    <TableCell align="right">{row.Dept}</TableCell>
                    <TableCell align="right">{row.Year}</TableCell>
                    <TableCell align="right">{row.Q1}</TableCell>
                    <TableCell align="right">{row.Q2}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}
