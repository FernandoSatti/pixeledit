import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useRef } from "react";
import {useCarritoContext} from "../context/CartContext.jsx";
import { Link,useNavigate } from "react-router-dom";
import { createOrdenCompra, getProduct, updateProduct } from "../firebase/firebase.js"
import { toast } from "react-toastify";

export const Checkout = () => {

  const formRef = useRef()
  const navigate = useNavigate()
  const {carrito,totalPrice,emptyCart} = useCarritoContext()
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const datForm = new FormData(formRef.current);
    const cliente = Object.fromEntries(datForm);


    const aux = [...carrito];

    for (const prodCarrito of aux) {
        try {
            const prodBDD = await getProduct(prodCarrito.id);

            if (prodBDD.cantidad >= prodCarrito.quantity) {
                prodBDD.cantidad -= prodCarrito.quantity;
                await updateProduct(prodBDD.id, prodBDD);
            } else {
                toast.info(`El servicio de edicion con el nombre ${prodBDD.title} no puede continuar con la compra ya que esa area esta ocupada`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });
                return; // Salir de la función si hay productos sin stock suficiente
            }
        } catch (error) {
            console.error("Error al obtener el producto:", error);
        }
    }


    const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, price: prod.price }));

    try {
        const ordenCompra = await createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }));

        toast.success(`🛒 Muchas gracias por comprar con nosotros, su ID de compra es: ${ordenCompra.id} por un total de $${totalPrice()}. En breve nos contactaremos para realizar envío`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });

        emptyCart();
        e.target.reset();
        navigate('/');
    } catch (error) {
        toast.error(`Error al generar orden de compra: ${error}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
    }
};

  return (
  <>
  {
    carrito.length === 0 ? 
    <>
      <h2>Para finalizar compra debe tener productos en el carrito</h2>
      <Link to={"/"}>
      <button className='button-reset' type="button">
                    Volver al inicio
                </button>
      </Link>
      
    </> 
    :
    <section className="section-form">
<div className="form-container">
      <div className="div-logo-form">
        <img src="https://firebasestorage.googleapis.com/v0/b/react-proyect-video.appspot.com/o/logo.png?alt=media&token=b16eae37-4e81-4bbc-bfd4-9ecb3c5f2c71" alt="" className="logo-form" />
      </div>
      <form className="form" action="" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre completo:</label>
          <input type="text" name="nombre"/>
        </div>
        <div className="form-group">
          <label>Telefono:</label>
          <input type="number"  name="telefono"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">que edicion deseas aplicar?</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" defaultValue={" "} />
        </div>
        <div className="button-upload">
          <button className="form-submit-btn" type="submit" >
            Comprar Servicio
          </button>
          <div className="upload">
          <input className="upload-input"  />
          <IoCloudUploadOutline className="icon" />
          </div>
        </div>
        <span className="price-cart">nos contactaremos por email para que puedas enviar tus archivos</span>
      </form>
    </div>
  
    </section>
    
  }
  </>
)
}
