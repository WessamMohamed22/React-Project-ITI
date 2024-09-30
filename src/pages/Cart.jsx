import React from 'react';
import { Button, ListGroup, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'; 

export default function Cart({ cartItems, removeFromCart, calculateTotalPrice }) {
  return (
    <Container className="py-5 my-5 bg">
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ListGroup>
          {cartItems.map((item) => (
            <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Image src={item.image} alt={item.title} rounded style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                <div>
                  <h5>{item.title}</h5>
                  <p>Price: ${item.price} x {item.quantity}</p> 
                </div>
              </div>
              <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <div className="mt-3">
        <h4>Total Price: ${calculateTotalPrice().toFixed(2)}</h4> 
        <Link to="/checkout">
          <Button className="btn-purple" variant="primary">Proceed to Checkout</Button>
        </Link>
      </div>
    </div>
    </Container>
  );
}
