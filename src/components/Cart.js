import React from "react";

import { CartContext } from "./CartContext";
import { useContext } from "react";

const Cart = () => {
  const test = useContext(CartContext);
  console.log(test.cartList);

  return (
    <>
      <h1>Cart 🛒</h1>
      
      <div>
        <p>{test.name}</p>
      </div>
      
    </>
  );
};

export default Cart;