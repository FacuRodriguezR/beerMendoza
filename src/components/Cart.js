import React from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


const Cart = () => {
  const {removeItem, clearItems, totalPrice, cartList } =useContext(CartContext)
  const test = useContext(CartContext);
  console.log(test.cartList);


  const order = {
    buyer:{
      name: 'Facundo',
      email: 'facurtprn@gmail.com',
      phone: '12830123',
      adress: 'Av Siempre Viva 123'
    },
    items: cartList.map(product => ({id: product.id, title: product.name, price: product.price, quantity: product.quantity })),
    total: totalPrice(),
  }


  const handleClick = () =>{
    const db = getFirestore();
    const orderCollection = collection(db, 'orders');
    addDoc(orderCollection, order)
    .then (({id}) => alert('Se ha creado la orden Satisfactoriamente. Su id de compra es ' + id))
    .then (clearItems())
    .catch (err => alert(err))
  }

  if (cartList.length === 0) {
    return(
      <div className="containerItems">
        <h1>No hay productos en el carrito 🛒</h1>
     <Link to="/" className="detalle">Realizar compra</Link>
        
      </div>
    )
  }

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
    <button type="button" className="detalle" onClick={handleClick}>Comprar</button>
    </div>
    </>
  );
};

export default Cart;