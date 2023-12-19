import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './navbar.css'

function AppNavbar() {
  const cart=useSelector((state)=>state.cart)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-2  ">
        <div className="container">
          <Link className="navbar-brand fw-bolder fs-4 text-uppercase" to={'/'}>
            MM Store
          </Link>
          <button
            className="navbar-toggler iconTogg"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>
                Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/products'}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
          <ul>
            <li className="list-unstyled cartBtn">
             <Link className="btn btn-outline-dark  " to={`/cart`}>Cart-{cart.length}</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default AppNavbar;
