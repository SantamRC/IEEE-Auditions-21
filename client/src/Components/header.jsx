import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Logo from '../Assets/newlogo.svg'
import '../Styles/header.css'
 import {Link} from 'react-router-dom'


export default function Header() {
    return (
        <div className="bg">
            <header className="header_common" >
                <div className="header_logo">
                    <img src={Logo}></img>
                </div>
                <nav >
                    <ul>
                        <Link to='/'><li>Home</li></Link>
                        <li>About-Us</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
