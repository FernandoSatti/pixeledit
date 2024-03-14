import React from 'react'
import { Link } from 'react-router-dom'
export const  NotFound = () => {
  return (

  <div className='notfound-container'>
      <h1 className='h1-404'>Error 404 - Página no encontrada</h1>
      <img className="img-404"src="https://firebasestorage.googleapis.com/v0/b/react-proyect-video.appspot.com/o/error404.png?alt=media&token=57f3f315-86fe-41d2-b208-e32e6593e662" alt="error404" />
    <div className='logo-h2'>
      <h2 className='h2-404'>volver al inicio:</h2>
      <Link to={"/"}>
        <img className="logo-404"src="https://firebasestorage.googleapis.com/v0/b/react-proyect-video.appspot.com/o/logo.png?alt=media&token=b16eae37-4e81-4bbc-bfd4-9ecb3c5f2c71" alt="logo de PixelEdit" />
      </Link>
    
    </div>
    
  </div>
)}
