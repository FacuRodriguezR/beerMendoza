import {createContext, useState} from 'react';


const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cartList, setCarList] = useState([]);

 const addToCart = (item)=> {
        setCarList([...cartList,item])
    }

    <CartContext.Provider value={[cartList, addToCart]}>
        { children }
    </CartContext.Provider>
}

export default CartContext;
