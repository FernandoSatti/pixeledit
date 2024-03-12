import React from "react";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext";
import {ItemList} from "./ItemList.jsx";
export const  Cart = () => {
  const { carrito, totalPrice, emptyCart } = useCarritoContext();
  return (
    <div className="hola">
      {carrito.length === 0 ? (
        <>
          <h1>Carrito Vacio</h1>
          <button className="button-nav">
            <Link to={"/"}>Volver al inicio</Link>
          </button>
        </>
      ) : (
        <div>
          <ItemList products={carrito} plantilla="ItemCart" />
          <div className="total-price-content">
            <p className="total-price">
              Resumen De Compra: ${totalPrice()} dolares
            </p>
          </div>
          <div className="buttons-item-cart">
          <button className="button-nav" onClick={emptyCart}>
            Vaciar Carrito
          </button>
          <button className="button-nav">
            <Link to={"/"}>Continuar Comprando</Link>
          </button>
          <button className="button-nav">
            <Link to={"/checkout"}>Finalizar Pedido</Link>
          </button>
          </div>
        </div>
      )}
    </div>
  );
}
