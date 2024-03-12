import React from "react";
import { useCarritoContext } from "../context/CartContext";
import { useCounter } from "../hooks/useCounter.js";
import { RiDeleteBin6Line } from "react-icons/ri";
export const ItemCart = ({ product }) => {
  const { removeItem, updateItem } = useCarritoContext();
  const { count, increment, decrement } = useCounter(product.quantity, product.cantidad, 1);
  return (
    <div className="itemcart-product-content">
      <span className="itemcart-td title-cart-effect">{product.title}</span>
      <div className="itemcart-product">
      <table>
      <tbody>
      <tr>
          <td></td>
          <td>
            <span className="itemcart-td">cantidad:{count}</span>
          </td>
          <td>
            <span className="itemcart-td">
              subtotal:${product.price * count}{" "}
            </span>
          </td>
          <td>
            <button
              onClick={async () => {
                updateItem(product.id, count - 1);
                decrement();
              }}
              className="button-cart"
              type="button"
            >
              -
            </button>
            <span className="span-cart">{count}</span>
            <button
              onClick={() => {
                updateItem(product.id, count + 1);
                increment();
              }}
              className="button-cart"
              type="button"
            >
              +
            </button>
          </td>
        </tr>
      </tbody>
      </table>
        
        
        <div className="button-delete-container">
          <button
            className="button-delete-item"
            onClick={() => {
              removeItem(product.id);
            }}
          >
            <RiDeleteBin6Line className="delete-item" />
          </button>
        </div>
      </div>
    </div>
  );
}
