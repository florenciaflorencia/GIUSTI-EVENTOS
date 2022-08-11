
const Bowl={
    id:1,
    imagen:"./imagenes/bazar.jpg",
    nombre:"Bowl lala",
    descripcion:"Bowl con base de goma",
    precio:1005
}

let tarjetas=document.getElementById("tarjetas");
tarjetas.innerHTML=`
    <div class="card" style="width: 18rem;">
    <img src=${Bowl.imagen} class="card-img-top" alt="bowl">
    <div class="card-body">
        <h5 class="card-title">${Bowl.nombre}</h5>
        <p class="card-text">${Bowl.descripcion}</p>
        <p class="card-text">$ ${Bowl.precio}</p>
        <button id="miBoton" class="btn btn-primary">Comprar</button>
    </div>
    </div>
`;
const carrito=[];

let miBoton=document.getElementById("miBoton");

miBoton.onclick = () => {
    console.log("Agregaste Bowl lala al carrito");
    carrito.push(Bowl);
}
  

let campoMail=document.getElementById("mail");
campoMail.onchange=()=>{
    console.log("Cambio el contenido del campo mail");
    console.log("Contenido actualizado: "+campoMail.value);
} 