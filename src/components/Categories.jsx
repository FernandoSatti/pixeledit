import React from 'react'
import { Link } from 'react-router-dom'
export const  Categories = () => {
  return (
<div className='nav-secondary'>
<h2 className='h2-nav-secondary'>Selecciona nuestras categorias</h2>
    <ul className='ul-secondary'>
    
    <Link to ={"/category/humor y creatividad"}><li>Humor y Creatividad</li></Link>
    <Link to ={"/category/experiencia personal"}><li>Experiencia Personal</li></Link>
    <Link to ={"/category/publicitario"}><li>Publicitario</li></Link>
    <Link to ={"/category/transmisiones"}><li>Transmisiones</li></Link>
    <Link to ={"/servicios"}><li>todo</li></Link>
    </ul>
</div>

  )
}
