import React from 'react'
import { Link } from 'react-router-dom'
export const Footer = () => {
    return (
    <footer className="footer-border">
        <div className="container">
            
            
            <div>
                <p>Contacto: fernandoist98@gmail.com</p>
            </div>
            <div className="social-media">
                <Link to={"/"} target="_blank">Facebook</Link>
                <Link to={"/"} target="_blank">Twitter</Link>
                <Link to={"/"} target="_blank">Instagram</Link>
            </div>
            <p className='p-footer'>&copy; 2024 PixelEdit. Todos los derechos reservados.</p>
        </div>
    </footer>
    )
}
