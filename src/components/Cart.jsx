import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartItems=useSelector(store=>store.cart.items);

  return (
    <div>
      <h1>Cart</h1>
      {
        cartItems.map((item,id)=><p key={id}>{item.card.info.name}</p>)
      }
    </div>
  )
}

export default Cart
