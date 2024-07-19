'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

const useCart = () => {
  const [cart, setCart] = useState({});

  const addToCart = async (item) => {
    const response = await axios.post('http://localhost:5000/add_to_cart', item);
    setCart(response.data);
  };

  const fetchCart = async () => {
    const response = await axios.get('http://localhost:5000/cart');
    setCart(response.data);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return {
    cart,
    addToCart
  };
};

export default useCart;
