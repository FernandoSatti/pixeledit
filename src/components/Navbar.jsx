import React from "react";
import {  Navbar as BootstrapNavbar,Container, Nav,} from "react-bootstrap";
import { CartWidget } from "./CartWidget.jsx"
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

export const Navbar = () => {

  const savedDarkMode = localStorage.getItem("darkMode") === "true";
  const [darkMode, setDarkMode] = useState(savedDarkMode);

  // Función para alternar el dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    // guardar eleccion del usuario
    localStorage.setItem("darkMode", newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  };

  // Aplicar el modo oscuro al cargar el componente
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <header>
      <BootstrapNavbar expand="lg" className={`nav ${darkMode ? 'dark-mode' : ''}`}>
        <Container className="container-nav">
          <Link to={"/"}>
            <BootstrapNavbar.Brand className="logo-name">
              <img src="https://firebasestorage.googleapis.com/v0/b/react-proyect-video.appspot.com/o/logo.png?alt=media&token=b16eae37-4e81-4bbc-bfd4-9ecb3c5f2c71" width={"50px"} alt="" />
              PixelEdit
            </BootstrapNavbar.Brand>
          </Link>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle"/>
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <li className="nav-item">
                <Link to={"/packs"} className="nav-link" >
                  <button className="button-nav">Packs</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/servicios/"} className="nav-link" >
                  <button className="button-nav">Servicios</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/nosotros"} className="nav-link" >
                  <button className="button-nav">acerca de nosotros</button>
                </Link>
              </li>
              
              <CartWidget/>
              <li className="nav-item li-toggle">
                <label className="switch">
                  <input type="checkbox" className="checkbox" onChange={toggleDarkMode} checked={darkMode} />
                  <div className="slider"></div>
                </label>
              </li>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </header>
  );
}
