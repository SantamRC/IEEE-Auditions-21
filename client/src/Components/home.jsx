import React from 'react'
import {GoogleLogin} from 'react-google-login'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router"

const clientID="797040142042-snt599hegqc8tr57v02ha8hpvd9rdek5.apps.googleusercontent.com";

const useStyles = makeStyles((theme) => ({
    signin:{
        marginTop:200,
        
    }
  }));
  

export default function Home(props){

    const classes = useStyles();
    let history = useHistory()

    function handleClick() {
        history.push("/form")
      }

    const onSuccess=()=>{
        console.log("Successfully Logged In");
        handleClick()
    }
    const onFailure=()=>{
        console.log("Login Failed")
    }

    return(
        <GoogleLogin 
        className={classes.signin}
        clientId={clientID}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={false}
        />
    )
}