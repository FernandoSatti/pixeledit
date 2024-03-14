import React from "react";
import { Link } from "react-router-dom";
export const Item =  ({ product }) => {
  return (
      <div className="card-container">
        <div className="card-container-product">
          <Link to={product.url}>
            <div className="card-product">
              <div className="front-content-product">
                <p>{product.title}</p>
              </div>
              <div className="content-product">
                <p className="heading-product">{product.title}</p>
                <p>{product.description}</p>
              </div>
            </div>
            </Link>
          
        </div>
        <Link to={`/product/${product.id}`}>
        <button className="button-service button-pack">
            {product.button}
          </button>
        </Link>
      </div>
  );
}
