import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {selectCartItems, selectCartItemTotal} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss'


const CheckoutPage =({cartsItems, total})=>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='checkout-block'>
                <span>Product</span>
            </div>
            <div className='checkout-block'>
                <span>Description</span>
            </div>
            <div className='checkout-block'>
                <span>Quantity</span>
            </div>
            <div className='checkout-block'>
                <span>Total</span>
            </div>
            <div className='checkout-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartsItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}
            <div className='total'>
                    <span>TOTAL: ${total}</span>
        </div>
    </div>
);


const mapStateToProps= createStructuredSelector({
    cartsItems : selectCartItems,
    total : selectCartItemTotal
})
export default (connect)(mapStateToProps)(CheckoutPage);