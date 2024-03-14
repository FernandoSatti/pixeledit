
import { useState, useEffect } from "react";
import {ItemList} from "./ItemList.jsx";
import { Link, useParams } from "react-router-dom";
import {Categories} from "./Categories.jsx";
import {Packs} from "./Packs.jsx";
import { getProducts } from "../firebase/firebase.js";
export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { cid } = useParams();
    ;
    useEffect(() => {
       getProducts()
            .then((prods) => {
                if (cid) {
                    const productosFiltrados = prods.filter((prod) => prod.category === cid);
                    
                    setProducts(productosFiltrados);
                } else {
                    setProducts(prods);
                }
            })
            .catch((error) => console.log(error));
    }, [cid]);

    return (
      
        <main>
            <div className="div-main">
    <h1 className="h1-header">Contrata nuestro servicio como editores de video</h1>
    <p className="p-header">llevamos años de experiencia con diferentes categorías de videos</p>
    <Link to={"/nosotros"}>
      <button className="button-header">
        <span>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
          ACERCA DE NOSOTROS
        </span>
      </button>
    </Link>
  </div>
  <div className="video-container">
    <video autoPlay muted loop>
      <source src="https://firebasestorage.googleapis.com/v0/b/react-proyect-video.appspot.com/o/liquid-divinum_1.webm?alt=media&token=8f193674-714f-4ec7-947d-b0e9452cc1e1" type="video/webm" />
    </video>
  </div>
            <Categories />
            
            <div className="grid-item">
                <ItemList products={products} plantilla="Item" />
            </div>
            <Packs />
        </main>
    );
}
