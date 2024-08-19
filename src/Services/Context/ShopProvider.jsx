import React, { createContext, useState } from 'react';
import { notification } from 'antd';
// import 'antd/dist/antd.css';


export const ShopContext = createContext();

const ShopProvider = ({ children }) => {

  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  console.log('Cart product:', cart);

  // Wishlist
  const toggleWishlist = (product) => {
    if (wishlist.includes(product)) {
      setWishlist(wishlist.filter(item => item !== product));
      notification.warning({
        message: 'Product removed from wishlist!',
        duration: 1,
      })
    } else {
      setWishlist([...wishlist, product]);
      notification.success({
        message: 'Product added to wishlist!',
        duration: 1,
      })
    }
  };

  const clearWishlist = () => {
    setWishlist([]);
    notification.info({
      message: 'Wishlist cleared!',
      duration: 1,
    })
  };


  // Cart
  const addToCart = (product, quantity = 1) => {
    const productExist = cart.find(item => item.id === product.id);

    if (productExist) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item));
      notification.success({
        message: 'Product quantity increased in cart.',
        duration: 1,
      });
    } else {
      setCart([...cart, { ...product, quantity }]);
      notification.success({
        message: 'Product added to cart!',
        duration: 1,
      });
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    notification.warning({
      message: 'Product removed from cart!',
      duration: 1,
    });
  };

  const incrementQuantity = (productId) => {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (productId) => {
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct.quantity === 1) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ));
    }
  };

  const clearCart = () => {
    setCart([]);
  };


  const addAllWishlistToCart = () => {
    wishlist.forEach(product => {
      addToCart(product);
    });
    setWishlist([]);
    notification.success({
      message: 'All Wishlist products added to cart!',
      duration: 1,
    })
  }

  // Total Price
  const totalAmount = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
  const packingCharge = 30;
  const totalPrice = totalAmount + packingCharge;

  const contextValue = {
    wishlist,
    toggleWishlist,
    clearWishlist,
    cart,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart,
    addAllWishlistToCart,
    totalAmount,
    packingCharge,
    totalPrice
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
