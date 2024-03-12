
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAHX9LVnZBG4w1FUyxpgnBzvv1ND628bSk",
    authDomain: "react-proyect-video.firebaseapp.com",
    projectId: "react-proyect-video",
    storageBucket: "react-proyect-video.appspot.com",
    messagingSenderId: "638295209299",
    appId: "1:638295209299:web:ae026cf80d7a1723335da6"
  };


  const app = initializeApp(firebaseConfig);

  //Consultar a la BDD
  const bdd = getFirestore()
/*
hacer un crud:
CREATE - READ- UPDATE-DELETE
*/
// const prods = [
//     {

//         "title": "Terror cinematográfico",
//         "description": "Edición al estilo cine. Con cortes y efectos especiales.",
//         "descriptionExtend": "Realizamos ediciones al estilo cinematográfico filmado con tu cámara en escenografías que serán transformadas en ediciones profesionales. Incluye cambios de ambiente, sonido y efectos para crear un contenido entretenido. Todos nuestros videos se guían por marketing digital para que tus films lleguen a más audiencia.",
//         "button": "Solicitar Servicio",
//         "cantidad": 20,
//         "category": "humor y creatividad",
//         "price": 5
//     },
//     {

//         "title": "Terror narrativo",
//         "description": "Uso de imágenes y sonidos para crear un ambiente escalofriante.",
//         "descriptionExtend": "Ofrecemos una experiencia de terror narrativo que utiliza imágenes y sonidos para crear un ambiente escalofriante. Perfecto para aquellos que buscan contar historias de una manera única.",
//         "button": "Solicitar Servicio",
//         "cantidad": 20,
//         "category": "humor y creatividad",
//         "price": 5
//     },
//     {
 
//         "title": "Vlogs Personales",
//         "description": "Optimización de contenido de video diario o semanal para cautivar a tu audiencia.",
//         "descriptionExtend": "Destacamos tus experiencias personales en vlogs. Optimizamos el contenido de video diario o semanal para cautivar a tu audiencia y mantenerlos comprometidos con tus historias personales.",
//         "button": "Solicitar Servicio",
//         "cantidad": 20,
//         "category": "experiencia personal",
//         "price": 5
//     },
//     {

//         "title": "Cursos de calidad",
//         "description": "Mejora y estructuración de videos educativos o no para destacar tu experiencia y conocimiento.",
//         "descriptionExtend": "Realizamos la mejora y estructuración de videos educativos o no para destacar tu experiencia y conocimiento. Ofrecemos servicios de calidad para elevar la presentación de tu contenido educativo.",
//         "button": "Solicitar Servicio",
//         "cantidad": 20,
//         "category": "experiencia personal",
//         "price": 5
//     },
//     {

//         "title": "Viajes Inolvidables",
//         "description": "Resaltando los momentos más memorables de tus viajes.",
//         "descriptionExtend": "Destacamos los momentos más memorables de tus viajes. Transformamos tus videos para capturar la esencia única de cada experiencia de viaje, creando recuerdos inolvidables.",
//         "button": "Solicitar Servicio",
//         "cantidad": 20,
//         "category": "experiencia personal",
//         "price": 5
//     },
//     {

//         "title": "Reels para redes",
//         "description": "Edición de videos cortos llenos de humor para viralizar tu contenido.",
//         "descriptionExtend": "Realizamos la edición de videos cortos llenos de humor para viralizar tu contenido en redes sociales. Creamos reels atractivos que destacarán tu marca y atraerán a una audiencia más amplia.",
//         "button": "Solicitar Servicio",
//         "cantidad": 20,
//         "category": "humor y creatividad",
//         "price": 5
//     },
//     {
//         "title": "Anuncios Publicitarios",
//         "description": "Produciendo contenido visualmente impactante para elevar tu marca.",
//         "descriptionExtend": "Realizamos la producción de contenido visualmente impactante para elevar tu marca. Creamos anuncios publicitarios efectivos que capturan la atención de tu audiencia y refuerzan tu presencia en el mercado.",
//         "button": "Solicitar Servicio",
//         "cantidad": 20,
//         "category": "publicitario",
//         "price": 5
//     },
//     {

//         "title": "Videos de Fitness Motivadores",
//         "description": "Resaltando rutinas de ejercicios de manera motivadora y atractiva.",
//         "descriptionExtend": "Realizamos la edición para resaltar rutinas de ejercicios de manera motivadora y atractiva. Creamos videos de fitness que inspiran y motivan, destacando tus rutinas de ejercicios de la manera más atractiva posible.",
//         "button": "Solicitar Servicio",
//         "cantidad": 20,
//         "category": "experiencia personal",
//         "price": 5
//     },
//     {
//         "title": "Clips Impactantes para Twitch",
//         "description": "Destacando los momentos más emocionantes para cautivar a tu audiencia en Twitch.",
//         "descriptionExtend": "Realizamos la creación de clips impactantes para Twitch. Destacamos los momentos más emocionantes de tus transmisiones para cautivar a tu audiencia y mejorar la visibilidad de tu canal.",
//         "button": "Solicitar Servicio",
//         "cantidad": 20,
//         "category": "transmisiones",
//         "price": 5
//     },
//     {
//         "title": "Clips Musicales",
//         "description": "Edición audiovisual que acompaña tu música.",
//         "descriptionExtend": "Realizamos la edición audiovisual que acompaña tu música. Creamos clips musicales que realzan la experiencia auditiva y visual de tu música, capturando la esencia única de tus creaciones.",
//         "button": "Solicitar Servicio",
//         "cantidad": 20,
//         "category": "humor y creatividad",
//         "price": 5
//     },
//     {
//         "title": "Gameplays",
//         "description": "Resaltando momentos épicos y entretenidos en el mundo del gaming con creatividad.",
//         "descriptionExtend": "Realizamos la edición de gameplays para resaltar momentos épicos y entretenidos en el mundo del gaming. Utilizamos creatividad para destacar los aspectos más emocionantes de tus sesiones de juego.",
//         "button": "Solicitar Servicio",
//         "cantidad": 20,
//         "category": "transmisiones",
//         "price": 5
//     },
//     {
//         "title": "Video Acompañado de Memes",
//         "description": "Una edición de estilo acompañado de memes virales del momento.",
//         "descriptionExtend": "Realizamos una edición de estilo acompañado de memes virales del momento. Creamos videos que combinan contenido humorístico con los memes más populares, ofreciendo entretenimiento único y compartible.",
//         "button": "Solicitar Servicio",
//         "cantidad": 20,
//         "category": "humor y creatividad",
//         "price": 5
//     }
// ]


// export const createProducts = async () => {
// try{
//     prods.forEach(async (prod) => {
//      const rta  =   await addDoc(collection(bdd, "productos"), {
//             title: prod.title,
//             description: prod.description,
//             descriptionExtend: prod.descriptionExtend,
//             button: prod.button,
//             cantidad: prod.cantidad,
//             category: prod.category,
//             price: prod.price
//         });
//         console.log(rta)
//     })
// }catch(e){
//     console.log(e)
// }
    
// }

export const getProducts = async () => {
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
    return items
}

//Consultar Producto
export const getProduct = async (id) => {
    const producto = await getDoc(doc(bdd, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

// Actualizar Producto

export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}

// Eliminar producto

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}




export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}
//lo que se quiera modificar para subir el update
// updateProduct("id-de firebase", {"el objeto de cada id osea cada servicio"}).then(rta =>console.log(rta))