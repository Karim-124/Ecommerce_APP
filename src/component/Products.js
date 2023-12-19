import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../rtk/slices/product-slice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { addToCart } from "../rtk/slices/cart-slice";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <>
      <h2 className="text-center text-muted my-5">Last Updated</h2>
      <div className="container">
        <div className="row">
          {products.map((pro) => {
            return (
              <div className="col-md-3 mb-3" key={pro.id}>
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={pro.image}
                    style={{ height: "250px" }}
                    className="p-3"
                  />
                  <Card.Body>
                    <Card.Title>{pro.title.slice(0,30)}</Card.Title>
                    <Card.Text>
                      {pro.description.slice(0,50)}
                    </Card.Text>
                    <Link className="btn btn-outline-dark m-1" variant="outline-primary" to={`/products/${pro.id}`}>Details</Link>
                    <Link className="btn btn-dark" variant="outline-primary" onClick={()=>{
                      dispatch(addToCart(pro))
                    }}>Add To Cart</Link>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
