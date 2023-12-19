import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../rtk/slices/cart-slice";
import './product-detail.css'

function ProductDetails() {
  const apiUrl = "https://fakestoreapi.com/products";
  const [data,setData]=useState([])
  const dispatch=useDispatch()
  const cart=useSelector((state)=>state.cart)
  useEffect(() => {

    fetch(`${apiUrl}/${parms.productID}`)
      .then((res) => res.json())
      .then((data)=>setData(data));
  }, []);

  const parms = useParams();
  return (
   <>
   <div className="container">
    <div className="row mt-5 detailPag">
        <div className="col-md-6">
            <img src={data.image} className="imgPag" width="400px" height="400px"/>
        </div>
        <div className="col-md-6 descPag">
            <h4 className="text-uppercase text-black-50">{data.category}</h4>
            <h1 className="display-5">{data.title}</h1>
            <p className="lead fw-bolder">{data.rating && data.rating.rate} </p>
            <i className="fa fa-star"></i>
            <h3 className="display-6 fw-bold my-4 ">$ {data.price}</h3>
           <p className="lead">{data.description}</p>
           <Link className="btn btn-outline-dark m-1" onClick={()=>{
            dispatch(addToCart(data))
           }}>Add To Cart</Link>
           <Link className="btn btn-dark" to={`/cart`}>Go To Cart</Link>
        </div>
    </div>
   </div>
  
  </>);
}

export default ProductDetails;
