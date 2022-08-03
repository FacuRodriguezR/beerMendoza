
import { createContext, useState, useContext } from "react";


export const useCartContext = () => useContext(CartContext);

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, quantity) => {
    let newCart;
    let product = cartList.find(product => product.id === item.id);
     if (product) {
        product.quantity += quantity;
        newCart = [...cartList];
    }else {
         product = {...item, quantity: quantity};
         newCart = [...cartList, product];
        }
setCartList(newCart);
}

const totalPrice = () => {
  return cartList.reduce ((prev, act) => prev + act.quantity * act.price, 0);
}

const isInCart = (id) => cartList.find(product => product.id === id) ? true : false;

const removeItem = (id) => setCartList(cartList.filter(producto =>producto.id !==id))

const totalItems = () => {
  
  cartList.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)};


  const clearItems = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider value={{ cartList, addToCart, isInCart, clearItems, removeItem, totalPrice, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;