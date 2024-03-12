import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Navbar} from "./components/Navbar.jsx";
import {ItemListContainer} from "./components/ItemlistContainer.jsx";
import {Footer} from "./components/Footer.jsx";
import {Cart} from "./components/Cart.jsx";
import {ItemDetailsContainer} from "./components/ItemDetailsContainer.jsx";
import {Checkout} from "./components/Checkout.jsx";
import {NotFound} from "./components/NotFound.jsx";
import {Nosotros} from "./components/Nosotros.jsx";
import {Packs} from "./components/Packs.jsx";
import { CarritoProvider } from "./context/CartContext.jsx";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
  <BrowserRouter>
    <CarritoProvider>
    <Navbar />
    <ToastContainer/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:cid" element={<ItemListContainer />} />
        <Route path="/servicios/" element={<ItemListContainer />} />
        <Route path="/product/:pid" element={<ItemDetailsContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route path="/packs" element ={<Packs />}></Route>
      </Routes>
      <Footer />
    </CarritoProvider>
  </BrowserRouter>
  );
};

export default App;
