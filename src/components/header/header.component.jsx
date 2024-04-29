import React from "react";
import { NavLink } from "react-router-dom";
import {ReactComponent as Logo} from '../assets/crown.svg'
import './header.styles.scss';
import { auth } from "../../Firebase/firebase.utils";

const Header = ({currentUser}) => (
<div className="header">
    <div className="logo-container">
        <NavLink to="/">
            <Logo className="logo"/>
        </NavLink>
    </div>
    <div className="options">
        <NavLink className="option" to="/shop">
            SHOP
        </NavLink>
        <NavLink className="option" to="/contact">
            CONTACT
        </NavLink>
        { 
            currentUser?(
            <div className="option" onClick={() => auth.signOut()}>
                SIGN OUT
                </div>
            ) : (
            <NavLink className= "option" to ='/signin'>
                SIGN IN
            </NavLink>
            )
        }
    </div>
</div>
);

export default Header;