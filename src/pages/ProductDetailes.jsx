import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import axios from 'axios';
import './ProductDetailes.css';


export default function ProductDetails({addToCart}) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className='bg p-5 text-dark'>
      <div className="container">
        <h1 className='text-center text-secondary mb-4'>Product Details</h1>
        {product ? (
          <div className="card mx-auto" style={{ maxWidth: '600px' }}>
            <img
              src={product.image}
              alt={product.title}
              className="card-img-top img-fluid"
              style={{ width: '150px', height: 'auto', margin: '0 auto' }} 
            />
            <div className="card-body">
              <h3 className='card-title'>{product.title}</h3>
              <p className='card-text'>Price: <strong>${product.price}</strong></p>
              <p className='card-text'>Description: {product.description}</p>
              <p className='lead mt-3'>Product Code: <strong>{id}</strong></p>
              <Button  className=' btn-purple ' variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
              <Link to='/products' className='btn btn-purple '>Back to Products</Link>
            </div>
          </div>
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
    </div>
  );
}
