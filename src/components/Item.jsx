import React from 'react';
import { BiFoodTag } from "react-icons/bi";


const Item = () => {
  return (
    <div>
      <section className="left">
        <BiFoodTag/>
        <p>Dates & Honey Bar</p>
        <p>Rs476.18</p>
      </section>
      <section className="right"></section>
    </div>
  )
}

export default Item
