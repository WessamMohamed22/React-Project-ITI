import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Card } from 'react-bootstrap';
import './Products.css'; 

export default function Products({ products, setProducts,addToCart }) {
  const deleteProduct = (id) => {
    const newList = products.filter(product => product.id !== id);
    setProducts(newList);
  };

  const renderedProductList = products && products.map(product => (
    <Col key={product.id} md={4} className="mb-4">
      <Card className="text-center product-card">
        <Card.Header className="text-danger">
          <i 
            onClick={() => deleteProduct(product.id)} 
            className="bi bi-x-circle text-danger float-start" 
            style={{ cursor: 'pointer' }} 
          />
        </Card.Header>
        <Card.Img variant="top" src={product.image} style={{ maxWidth: '150px', margin: '0 auto' }} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            <strong>Price:</strong> ${product.price}<br />
            <strong>Category:</strong> {product.category}
          </Card.Text>
          <Link to={`/products/${product.id}`} className="mx-2">
            <i className="text-warning bi bi-eye-fill fs-5"></i>
          </Link>
          <Link to={`/products/${product.id}/edit`} className="mx-2">
            <i className="text-info bi bi-pencil-square fs-5"></i>
          </Link>
          <br />
          <Button  className=' btn-purple ' variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <div className='mt-5'>
      <div className="container">
        <h1 className='text-muted text-center mb-4'>Our Products</h1>
        <Link to="/products/0/edit" className='btn btn-purple mb-3 float-end'>
          <i className="bi bi-plus-circle"></i>
        </Link>
        <Row>
          {renderedProductList}
        </Row>
      </div>
    </div>
  );
}



