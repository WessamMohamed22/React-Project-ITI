import './App.css';
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetailes";
import ProductForm from "./pages/ProductForm";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Cart from './pages/Cart'; 
import Login from "./pages/Login";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [products, setProducts] = useState([]);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userName, setUserName] = useState("");
	const [cartItems, setCartItems] = useState([]);

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

	const handleLogin = (name) => {
		setIsAuthenticated(true);
		setUserName(name);
	};

	const handleLogout = () => {
		setIsAuthenticated(false);
		setUserName("");
	};

	const addToCart = (product) => {
		const existingProduct = cartItems.find(item => item.id === product.id);
		if (existingProduct) {
			setCartItems(cartItems.map(item => 
				item.id === product.id ? { ...existingProduct, quantity: existingProduct.quantity + 1 } : item
			));
		} else {
			setCartItems([...cartItems, { ...product, quantity: 1 }]);
		}
		
	};

	const removeFromCart = (id) => {
		setCartItems(prevCart => {
			const updatedCart = prevCart.map(item => {
				if (item.id === id) {
					// Decrease quantity
					return { ...item, quantity: item.quantity - 1 };
				}
				return item;
			}).filter(item => item.quantity > 0); 
	
			return updatedCart;
		});
	};

	const calculateTotalPrice = () => {
		return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path='/' element={<Layout userName={userName} onLogout={handleLogout} cartCount={cartItems.length}/>}>
					<Route index element={isAuthenticated ? <Home products={products} setProducts={setProducts} addToCart={addToCart} /> : <Login onLogin={handleLogin} />} />
					<Route path='login' element={<Login onLogin={handleLogin} />} />
					<Route path='products' element={isAuthenticated ? <Products products={products} setProducts={setProducts} addToCart={addToCart} /> : <Login onLogin={handleLogin} />} />
					<Route path='products/:id' element={isAuthenticated ? <ProductDetails products={products} addToCart={addToCart} /> : <Login onLogin={handleLogin} />} />
					<Route path='products/:id/edit' element={isAuthenticated ? <ProductForm products={products} setProducts={setProducts} /> : <Login onLogin={handleLogin} />} />
					<Route path='/cart' element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} calculateTotalPrice={calculateTotalPrice} />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</>
		)
	);

	return (
		<RouterProvider router={router} />
	);
}

export default App;
