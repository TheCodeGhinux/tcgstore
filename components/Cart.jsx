import React, { useRef } from 'react';
import Link from 'next/link';

import logo from '../public/assets/giy_.png'
import {AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShoppingCart} from 'react-icons/ai';
import {TiDeleteOutline} from 'react-icons/ti';
import toast from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';



import { useFlutterwave, FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';


import NumberFormat from 'react-number-format';

const Cart = () => {

  const cartRef = useRef();  
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();

  const config = {
    public_key:  process.env.NEXT_PUBLIC_FLUTTERWAVE_KEY,
    tx_ref: Date.now(),
    amount: totalPrice,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    // redirect_url: `${req.headers.origin}/success=true`,
    customer: {
      email: 'user@gmail.com',
      phonenumber: '08102909304',
      name: 'test user',
    },

    customizations: {
      title: 'TCG Gadgets Store',
      description: 'Payment for items in cart',
    logo: 'https://cdn.sanity.io/images/nwd3aka3/production/bff55ef94366ffc7f49d2c299c3b245a5f3da060-325x333.png',
    },
  };
  
  const handleFlutterPayment = useFlutterwave(config);

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave btn',
    callback: (response) => {
      console.log(response);
      closePaymentModal()
    },
    onClose: () => {
      console.log("You close me ooo")
    },
    
  };



  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button type="button" className="cart-heading" onClick={() => setShowCart(false)}>
          <AiOutlineLeft/>
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
          </button>
          {cartItems.length < 1 && (
            <div className="empty-cart">
              <div className='empty-cart-text'>
                <AiOutlineShoppingCart size={100} />
                <h3>Your shopping cart is empty </h3>
              </div>
              <Link href="/">
                <button className="btn" onClick={() => setShowCart(false)}>
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}

          <div className="product-container">
            {cartItems.length >= 1 && cartItems.map((item, index) => (
              <div className="product" key={item._id}>
                <img src={urlFor(item?.image[0])} alt="" className="cart-product-image"/>
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.namey}</h5>
                    {/* <h4>${item.price}</h4> */}
                    <NumberFormat className="product-price" value={item.price} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span className='minus' onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus/></span>
                        <span className='num' onClick="">{item.quantity}</span>
                        <span className='plus' onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus/></span>
                      </p>
                    </div>
                    <button className="remove-item" type="button" onClick={() => onRemove(item)}><TiDeleteOutline/></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {cartItems.length >= 1 && (
            <div className="cart-bottom">
              <div className="total">
              <h3>Subtotal:</h3>
              {/* <h3>{totalPrice}</h3> */}
              <NumberFormat className="product-price" value={totalPrice} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
            </div>
            <div className="btn-container">
              {/* <button className="btn" type="button" onClick={handleCheckout}>Pay with Flutterwave</button> */}

              <button className="btn"
                onClick={() => {
                  handleFlutterPayment({
                    callback: (response) => {
                      console.log(response);
                      closePaymentModal()
                    
                    },
                    onClose: () => {
                      console.log("You closed this modal")
                    },
                    
                  });
                }}
              >
                Pay with Flutterwave
            </button>
              {/* <button className="btn" type="button" onClick={handleCheckout}>Pay with Stripe</button> */}
            </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Cart