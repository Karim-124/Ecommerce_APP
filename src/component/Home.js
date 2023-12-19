import React from "react";
import image1 from '../images/online-fashion-shopping-with-tablet.jpg'
import './home.css'
function Home() {
  return (
    <>
      <div className="card bg-dark text-white border-0">
        <img src={image1} className="card-img cardImg  " alt="..." />
        <div className="card-img-overlay d-flex flex-column justify-content-center ">
            <div className="container">
            <h5 className="card-title fw-bold text-black text-uppercase fs-1">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
          </p>
          <p className="card-text">Last updated 3 mins ago</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
