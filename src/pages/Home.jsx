import React from 'react';
// Home.jsx
import MySlider from '../components/MySlider';
import Products from "../pages/Products";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home({addToCart}) {
  const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get('https://fakestoreapi.com/products');
				setProducts(response.data);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		};
		fetchProducts();
	}, []);

  return (
    <>
     <MySlider />
    <Products  products={products} setProducts={setProducts} addToCart={addToCart} />
   
    </>
  )
}
