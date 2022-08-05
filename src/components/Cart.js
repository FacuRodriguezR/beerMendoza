import React from "react";

import { CartContext } from "./CartContext";
import { useContext } from "react";


const Cart = () => {
  const {removeItem, clearItems, totalPrice } =useContext(CartContext)
  const test = useContext(CartContext);
  console.log(test.cartList);

  return (
    <>
    <div className="containerItems">

      <h1>Cart 🛒</h1>
      
     { test.cartList.length > 0 && test.cartList.map(item =>(
      <div className="itemCart">
        <h2>{item.name}</h2>
        <img src={item.image} height="100px" alt="img"/>
        <p>Precio: $ {item.price * item.quantity}</p>
   
        <p>{item.quantity + " Items"}</p>
        <button type="button" className="detalle" onClick={() => removeItem(item.id)}  >eliminar</button>
      </div>
     ))}

      <p>Total: $ {totalPrice()}</p>
    </div>
    <div className="footerCart">

    <button type="button" className="detalle" onClick={() => clearItems()}>Vacíar carrito</button>
    </div>
    </>
  );
};

export default Cart;