import React, { Fragment } from "react";
import './Header.css';
import Logo from '../../assets/logo.svg';
import { Button } from "@material-ui/core";

export default function Header(){
    return(

<Fragment>
        <div className = "header">
            <img className = "logo" src = {Logo} alt="logo"></img>
            
            <Button variant="contained" className="login-btn" color="default">Login</Button>
        </div>  
</Fragment>

    )
}

