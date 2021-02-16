import React from 'react'
import video from '../Assets/tech.mp4'
import './homepage.css'
import MediaQuery from 'react-responsive'
import videoM from '../Assets/tech_mobile.mp4'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button:{
        zIndex:2,
        marginTop:100,
        justifyContent:'center'
    }
  }));

export default function Homepage() {
    const classes = useStyles();

    return (
        <div>
            <MediaQuery maxDeviceWidth={860} >
                <div className="textM">IEEE SB NIT Durgapur</div>
                <Button className={classes.button} variant="outlined" color="primary">
                    Register
                </Button>
                <video className='videoM' autoPlay loop muted>
                    <source src={videoM} type='video/mp4' />
                </video>
            </MediaQuery>
            <MediaQuery minDeviceWidth={860}>
                <video className='video' autoPlay loop muted>
                    <source src={video} type='video/mp4' />
                </video>
            </MediaQuery>
        </div>
    )
}
