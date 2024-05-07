import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {ReactComponent as Logo} from '../assets/crown.svg'
import './header.styles.scss';
import { auth } from "../Firebase/firebase.utils";

const Header = ({currentUser, hidden}) => (
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
        <CartIcon/>
    </div>
    {
        hidden ? null : <CartDropdown/>
    }
</div>
);

const mapStateToProps = ({user: { currentUser }, cart: {hidden} }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps) (Header);