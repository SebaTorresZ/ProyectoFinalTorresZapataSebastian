
import { createContext, useState } from "react";
export const CartContext = createContext(); 

const CartProvider = ({ children}) =>{ 
    const [cartArray, setCartArray] = useState([]);
    const addToCart = (joya, count) => {
      if(isInCart(joya.id)){
        console.log("ya esta el producto en el carrito") 
      }else{
        console.log(`Agregaste ${joya.name}, cantidad: ${count}`);
        const newObj = {
          item: joya,
          count
        }
        setCartArray([...cartArray, newObj])
      }
      }
    
   
    const deleteItem = (id) => {
      const updateCart = cartArray.filter(element=>element.item.id !== id); 
      setCartArray(updateCart);
    }

    const clearCart = () => {
      setCartArray([]);
    }
    const isInCart = (id) => {
      return cartArray.some(element=>element.item.id === id)
    }
    const total = () =>{

      return cartArray.reduce((acc, item)=> acc + item.count * item.item.price, 0)
    }
    const cartQuantity = () =>{

    }
    const value = {
      cartArray,
      addToCart, 
      deleteItem,
      clearCart,
      isInCart,
      total, 
      cartQuantity
    }

  return(

<CartContext.Provider 
    value={value}>
    {children}
    </CartContext.Provider>
  ); 
}

export default CartProvider;