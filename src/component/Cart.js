import React from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { clear, removeFromCart } from "../rtk/slices/cart-slice";
import './cart.css'

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch=useDispatch()
const totalPrice=cart.reduce((acc,pro)=>{

    acc+=pro.price * pro.quantity
    return acc;
},0)
  return (
    <>
      <div className="container my-5">
        <h3>Welcome To Cart</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Image</th>
              <th>quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((pro) => {
              return (
                <tr>
                  <td>{pro.id}</td>
                  <td>{pro.title}</td>
                  <td ><img style={{width:"100px",height:"100px"}} src={pro.image}/></td>
                  <td>{pro.quantity}</td>
                  <th>{pro.price}</th>
                  <td><button className="btn btn-outline-danger" onClick={()=>dispatch(removeFromCart(pro))}>Remove</button></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div className="d-flex justify-content-between">
        <button className="btn btn-outline-primary clearBtn " onClick={()=>{
            dispatch(clear())
        }}>Clear Cart</button>
       <h3 className="lead">Total Price: $ {totalPrice}</h3>
        </div>
        
      </div>
    </>
  );
}

export default Cart;
