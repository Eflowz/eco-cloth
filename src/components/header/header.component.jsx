import React from "react";
import { NavLink } from "react-router-dom";
import {ReactComponent as Logo} from '../assets/crown.svg'
import './header.styles.scss';

const Header = () => (
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
    </div>
</div>
);

export default Header;