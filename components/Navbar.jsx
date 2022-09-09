import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../public/assets/giy_.png';

import {AiOutlineShoppingCart} from 'react-icons/ai'

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {

  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <div className="logo-con">
          {/* <img className="logo" src={logo} alt="GIY" /> */}
        <Link href="/" >
          <a className='logo' >
            <Image 
              width={64}
              height={64}
              src={logo} alt="logo" className='logo-img' /> 
            <div className="logo-text">
              <h1>TCG Gadgets.</h1> 
              {/* <h4>Gadgets.</h4> */}
            </div>
          </a>
        </Link>
      </div>

     <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
      <AiOutlineShoppingCart/>
      <span className="cart-item-qty">{totalQuantities}</span>
     </button>

     {showCart && <Cart/>}
    </div>
  )
}

export default Navbar