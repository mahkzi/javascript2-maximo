const header = document.getElementById("contenedor");
const nav = document.createElement("nav"); 
nav.className= "navegador";
header.appendChild(nav);
const links=document.createElement("div");
links.className="contenedor-ul";
nav.appendChild(links);
const ulista =document.createElement("ul");
ulista.className="contenedor-li";
links.appendChild(ulista);
const lia=document.createElement("li");
lia.className="lista";
ulista.appendChild(lia);
const lib=document.createElement("li"); 
lib.className="lista"; 
ulista.appendChild(lib);
const inicio=document.createElement("a");
inicio.href="./index.html";
inicio.innerText="Inicio";
inicio.className="links";
lia.appendChild(inicio);
const nosotros=document.createElement("a");
nosotros.href="/pages/nosotros.html"
nosotros.innerText="Sobre nosotros";
nosotros.className="links";
lib.appendChild(nosotros);
const icono=document.createElement("div");
icono.className="contenedor-icono";
nav.appendChild(icono);
const imagen=document.createElement("img");
imagen.src="./assets/icons8-carrito-de-compras-50.png";
imagen.alt="icono del carrito";
imagen.className="img";
icono.appendChild(imagen);
console.log(header); 
// header index
 //main
 const container=document.getElementById("main-container");
 const titulo=document.createElement("h1");
 titulo.className="titulo-principal";
 titulo.innerText="Nuestros Productos";
 container.appendChild(titulo);
 const containerCards=document.createElement("section");
 containerCards.className="contenedor-cartitas";
 container.appendChild(containerCards);
 const producto=[ 
   {
id:1,
nombre: "Da Vinci",
precio: 29.99, 
imagen:"../assets/Eames-blanco-600x629-1-e1693398098543.jpg"
},
 { 
id:2,
nombre:"Donatello",
precio: 32.99,
imagen:"../assets/silla blanca.jpg"
},
{ 
id:3,
nombre:"Miguel Ángel",
precio:24.99,
imagen:"../assets/sila negra.jpg"
}, 
 { 
id:4,
nombre:"Rafael",
precio:19.99,
imagen:"../assets/silla gris.png"
 },
{ 
id:5,
nombre:"Botticelli",
precio:39.99,
imagen:"../assets/sillon naranja.jpg"
},
{ 
id:6,
nombre:"Vecellio",
precio:49.99,
imagen:"../assets/sillon gris.jpg"
},
{ 
id:7,
nombre:"ángelico",
precio:35.99,
imagen:"../assets/sillon blanco.jpg"
 },
{ 
id:8,
nombre:"Masaccio",
precio:27.99,
imagen:"../assets/sillon celeste.webp"
},
{ 
id:9,
nombre:"Durero",
precio:89.99,
imagen:"../assets/a-quien-se-leocurrio-esta-mesa.webp"
 },
{ 
id:10,
nombre:"Caravaggio",
precio:79.99,
imagen:"../assets/mesa-madera.jpg"
 },
{
id:11,
nombre:"Bellini",
precio:67.99,
imagen:"../assets/mesa blanca.jpg"
}, 
 { 
id:12,
nombre:"Vasari",
precio:51.99,
imagen:"../assets/mesa-gris-fea.jpg"
}
 ]
producto.forEach(el=>{
   const card=document.createElement("div")
   card.className="cartita"
   const imagen=document.createElement("img");
   imagen.src=`${el.imagen}`;
   imagen.alt="no carga la imagen";
   imagen.className="imagen-cartita"
   const nombre=document.createElement("p")
   nombre.className="texto-cartita"
    const precio=document.createElement("p")
   precio.className="texto-cartita"
   const boton=document.createElement("button")
   boton.className="boton-card"
   nombre.innerText=`${el.nombre}`
   precio.innerText=`${el.precio}`
   boton.innerText="comprar";
   boton.addEventListener("click",()=>agregarAlCarrito())
   card.appendChild(imagen);
   card.appendChild(nombre);
   card.appendChild(precio);
   card.appendChild(boton);
   containerCards.appendChild(card)})
   //carrito
   let carrito;
    if (localStorage.getItem("carrito")){
       carrito=JSON.parse(localStorage.getItem("carrito"));
       }else{ carrito=[] 
       } 
       function agregarAlCarrito(){  
         carrito.push(producto.el)
         localStorage.setItem("carrito",JSON.stringify(carrito))
       }