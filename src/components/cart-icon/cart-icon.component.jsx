import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCartCount } from '../../redux/cart/cart.selectors';

import {ReactComponent as ShoppingIcon } from '../assets/11.2 shopping-bag.svg.svg'
import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick = {toggleCartHidden} >
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount} </span>
    </div>
);


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
    itemCount: selectCartItemsCartCount(state) 
})

export default connect (mapStateToProps, mapDispatchToProps)(CartIcon);