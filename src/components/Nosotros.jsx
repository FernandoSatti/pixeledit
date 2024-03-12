import React from "react";
import { Link } from "react-router-dom";
export const Nosotros = () => {
  return (
    <>
      <div className="video-nosotros">
        <video
          src="https://firebasestorage.googleapis.com/v0/b/react-proyect-video.appspot.com/o/contamos.mp4?alt=media&token=7a4668a5-de0d-4da3-86ca-9f7358a3197d"
          autoPlay
          loop
          controls={false}
        />
      </div>
      <div className="nosotros-container">
        <section className="social-nosotros">
          <h2 className="h2-nosotros">Acerca de Nosotros</h2>
          <p className="p-nosotros">
            Somos un equipo apasionado por la edición de videos y nos dedicamos
            a proporcionar un servicio excepcional para mejorar y transformar
            tus momentos especiales en experiencias inolvidables.
          </p>
          <h3 className="h3-nosotros">Nuestro Proceso de Edición</h3>
          <ul className="ul-nosotros">
            <li className="li-nosotros">
              Recepción de tu material audiovisual.
            </li>
            <li className="li-nosotros">
              Análisis detallado de tus necesidades y preferencias.
            </li>
            <li className="li-nosotros">
              Edición creativa para resaltar lo mejor de tu contenido.
            </li>
            <li className="li-nosotros">
              Servicios de Marketing Digital para elevar tu audiencia.
            </li>
            <li className="li-nosotros">
              Revisión y ajustes según tus comentarios.
            </li>
            <li className="li-nosotros">
              Entrega final de un video de alta calidad.
            </li>

            <li className="li-nosotros">
              Entrega final de un video de alta calidad.
            </li>
          </ul>
          <p className="p-nosotros">
          En PixelEdit, entendemos la importancia de una presencia sólida en las
          redes sociales. Ofrecemos asesoría especializada en marketing digital,
          adaptando nuestras estrategias para cada plataforma con el fin de
          maximizar el impacto.
        </p>
        </section>
        <div className="red-social-circle">
          <h2 className="h2-nosotros">Puedes contactarte con nosotros!</h2>
          <div className="main">
            <div className="up">
              <Link to={"#"}>
              <button className="card1"><img  className="ig" src="https://firebasestorage.googleapis.com/v0/b/react-proyect-video.appspot.com/o/ig.png?alt=media&token=d7c60105-8dad-4e3f-b640-781a34175b2b" alt="logo-instragram" /></button>
              </Link>
              <Link to={"#"}>
              <button className="card2"><img className="fb"src="https://firebasestorage.googleapis.com/v0/b/react-proyect-video.appspot.com/o/fb.png?alt=media&token=035d6cc0-8878-4c80-8417-548e18b35d46" alt="logo de facebook" /></button>
              </Link>
              
            </div>
            <div className="down">
              <Link to={"#"}>
              <button className="card3"><img className="wp" src="https://firebasestorage.googleapis.com/v0/b/react-proyect-video.appspot.com/o/wp.png?alt=media&token=99255c7a-5520-4c09-b090-1fae688ebf1d" alt="logo-whatsapp" /></button>
              </Link>
              <Link to={"#"}>
              <button className="card4"><img className="tk" src="https://firebasestorage.googleapis.com/v0/b/react-proyect-video.appspot.com/o/tk.png?alt=media&token=b73b2dcc-2736-44c9-823e-e7e1de0ea5b4" alt="logo de tiktok" /></button>

              </Link>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}
