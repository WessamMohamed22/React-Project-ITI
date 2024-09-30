 import React, { useEffect, useState } from 'react';
 import { Button, Form, Container } from 'react-bootstrap';
 import { useNavigate, useParams } from 'react-router-dom';
 import './Login.css'; 

 export default function ProductForm({ products, setProducts }) {
   const navigate = useNavigate();
   const { id } = useParams();
   const [productForm, setProductForm] = useState({
     title: '',
     price: '',
     quantity: '',
     category: '', 
     image: '' 
   });

   useEffect(() => {
     if (id !== '0') {
       const productToEdit = products.find(product => product.id === parseInt(id));
       if (productToEdit) {
         setProductForm({
           title: productToEdit.title,
           price: productToEdit.price,
           quantity: productToEdit.quantity,
           category: productToEdit.category || '', 
           image: productToEdit.image || '' 
         });
       }
     }
   }, [id, products]);

   const getInputValue = (e) => {
     setProductForm({
       ...productForm,
       [e.target.name]: e.target.value
     });
   };

   const productHandler = (e) => {
     e.preventDefault();
     if (id === '0') {
       const productId = products.length ? Math.max(products.map(p => p.id)) + 1 : 1; 
       setProducts([...products, { id: productId, ...productForm }]);
     } else {
       const updatedProducts = products.map(product => 
         product.id === parseInt(id) ? { ...product, ...productForm } : product
       );
       setProducts(updatedProducts);
     }
     navigate('/products');
   };

 

   return (
     <Container className="py-5 my-5 bg">
     <div className='d-flex justify-content-center mt-5'>
       <div className="col-md-6">
         <h1 className='text-center text-muted'>{id === '0' ? 'Add New Product' : 'Edit Product'}</h1>
         <Form onSubmit={productHandler}>
           {/* Form Groups */}
           <Form.Group className="mb-3">
             <Form.Label>Product Name</Form.Label>
             <Form.Control 
               onChange={getInputValue} 
               value={productForm.title} 
               type="text" 
               placeholder="Enter Product Name" 
               name='title' 
             />
           </Form.Group>

           <Form.Group className="mb-3">
             <Form.Label>Product Price</Form.Label>
             <Form.Control 
               value={productForm.price} 
               onChange={getInputValue} 
               type="number" 
               placeholder="Enter Product Price" 
               name='price' 
             />
           </Form.Group>
           <Form.Group className="mb-3">
             <Form.Label>Product Quantity</Form.Label>
             <Form.Control 
               value={productForm.quantity} 
               onChange={getInputValue} 
               type="number" 
               placeholder="Enter Product Quantity" 
               name='quantity' 
             />
           </Form.Group>
           <Form.Group className="mb-3">
             <Form.Label>Product Category</Form.Label>
             <Form.Control 
               value={productForm.category} 
               onChange={getInputValue} 
               type="text" 
               placeholder="Enter Product Category" 
               name='category' 
             />
           </Form.Group>
           <Form.Group className="mb-3">
             <Form.Label>Product Image URL</Form.Label>
             <Form.Control 
               value={productForm.image} 
               onChange={getInputValue} 
               type="text" 
               placeholder="Enter Product Image URL" 
               name='image' 
             />
           </Form.Group>

           <Button className="btn-purple" variant="success" type="submit">
             {id === '0' ? 'Add New Product' : 'Edit Product'}
           </Button>
         </Form>
       </div>
     </div>
   </Container>
   );
 }




