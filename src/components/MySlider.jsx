import React, { Component } from 'react';
import './MySlider.css';
/*eslint-disable*/ 
export default class MySlider extends Component {
  render() {
    return (
      <>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img style={{width:"500px", height: "500px"}} src="./images/1.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First Slide Title</h5>
                <p>This is the description for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img style={{width:"500px", height: "500px"}} src="./images/3.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second Slide Title</h5>
                <p>This is the description for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img style={{width:"500px", height: "500px"}} src="./images/2.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third Slide Title</h5>
                <p>This is the description for the third slide.</p>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    );
  }
}
