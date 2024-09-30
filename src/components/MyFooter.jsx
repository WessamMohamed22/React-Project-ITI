import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './MyFooter.css';

export default class MyFooter extends Component {
  render() {
    return (
      <>
      <footer className="bg-body-tertiary text-dark text-center py-5 mt-3">
      <Container>
      <ul className="list-inline" >
          <li className="list-inline-item">
            <a href="#" className="fa-brands fa-twitter" ></a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="fa-brands fa-facebook" ></a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="fa-brands fa-instagram" ></a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="fa-brands fa-snapchat" ></a>
          </li>
        </ul>
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </Container>
    </footer>
      </>
    )
  }
}

