import React from 'react'
import { useCounter } from '../hooks/useCounter.js';
import { useCarritoContext } from '../context/CartContext.jsx';
import { toast } from "react-toastify";
export const ItemDetail = ({ item }) => {
  const { addItem } = useCarritoContext()
 const{count,increment,decrement,reset} = useCounter(1,20,1)
 const handleAddToCart = ()=>{
  addItem(item, count);
  toast.success(`Servicio con el nombre ${item.title} agregado al carrito`, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark"
})
}
  return (

    <div className='item-content'>
      
      <div className='item-video'>
        <h2 className='h2-item'>{item.title}</h2>
        <video src="https://firebasestorage.googleapis.com/v0/b/react-proyect-video.appspot.com/o/video-plantilla.webm?alt=media&token=54dfb521-01cc-4b4c-8237-695c6e50771e" controls className='video-item'></video>
      <h2 className= "h2-cart-item">Nuestra edicion</h2>
      <p className='p-item'>{item.descriptionExtend}</p>

      <div className='button-cart-container'>
            <span className='p-button-cart'>
                    videos a editar:
                </span>
                <button onClick={decrement} className='button-cart' type="button">
                    -
                </button>
                <span className='span-cart'>{count}</span>
                <button onClick={increment} className='button-cart' type="button">
                    +
                </button>
                <button onClick={reset} className='button-reset' type="button">
                    reset
                </button>
                
                <button onClick={handleAddToCart} className='button-reset' type="button">
                    solicitar servicio
                </button>
            </div>
      </div>
      <img src="https://firebasestorage.googleapis.com/v0/b/react-proyect-video.appspot.com/o/Por%20que%20eLegirnos%20(1)%20(1).webp?alt=media&token=107d99bf-7688-4566-ba41-3346c74fc44b" alt="" />
    </div>
    
  )
}