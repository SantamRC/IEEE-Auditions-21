import React from 'react'
import {GoogleLogin} from 'react-google-login'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router"
import './home.css'

const clientID="797040142042-snt599hegqc8tr57v02ha8hpvd9rdek5.apps.googleusercontent.com";
const clientID2="797040142042-0mj9t3tdd2e5dte3g1n04fg7a9r1slm5.apps.googleusercontent.com"

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
        <div>
        <div class="container">
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="https://www.ieeesbnitdgp.com/" target="_blank" >IEEESB </a>
                    </li>
                    <li>
                        <a href="#" > Contact </a>
                    </li>
                    <li>
                        <a href="https://insight.ieeesbnitdgp.com/" target="_blank"> Insight </a>
                    </li>
                    <li>
                        <a href="#btn"> Register </a>
                    </li>

                </ul>
            </nav>
        </header>
    <div class="logo"><b>I<span>EE</span>E<span>SB</span> Auditions</b></div>
    </div>
    <div class="container2">
        <a href="https://ieeeauditions21.herokuapp.com/form" class="zind">
            <button id="btn" onCl>
                Register Now
            </button>
        </a>
        <p>
            Come Join Us  <br/>
        </p>

        <div class="container3">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
            <span class="text">Scroll down</span>
        </div>

    </div>


    <div class="container4">
        <div class="wpic">
            Why Join Us ?
        </div>
    </div>

        <GoogleLogin 
        className={classes.signin}
        clientId={clientID2}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        isSignedIn={false}
        />
        </div>
    )
}