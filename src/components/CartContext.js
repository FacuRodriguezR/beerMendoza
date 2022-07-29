
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

const isinCart = (id) => cartList.find(product => product.id === id) ? true : false;

  const clearItems = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider value={{ cartList, addToCart, isinCart, clearItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;