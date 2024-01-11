import React from 'react'
import { useSelector } from 'react-redux';
import CartCard from './CartCard';

const Cart = () => {
  const cartItems=useSelector(store=>store.cart.items);
  
  return (
    <div>
      <h1>Cart</h1>
     <div className='flex p-5 flex-wrap'> {
        cartItems.map((item,id)=><CartCard key={id} info={item}/>)
      }</div>
    </div>
  )
}

export default Cart
