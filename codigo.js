let carrito=[]
const carteleraCine=[
    {
        foto:"./img/jurassicworld.jpg",
         nombre: "Jurassic park dominion",
         genero:"accion/ciencia ficcion",
         precio:800,
         descripcion:"Cuatro años después de la destrucción volcánica de Isla Nublar y el incidente de la mansión Lockwood, los desextintos dinosaurios ahora viven junto a los humanos. Claire Dearing, ex directora de operaciones de Jurassic World, trabaja para proteger a los dinosaurios de las organizaciones de cría ilegales.",
         duracion:"2h 27m",
         estreno:"02/06/2022",
         id:1
    },
    {
        foto:"./img/lightyear.jpg",
        nombre: "lightyear",
        genero:"aventura/infantil",
        precio:800,
        descripcion:"Buzz Lightyear se embarca en una aventura intergaláctica con un grupo de reclutas ambiciosos y su compañero robot. ",
        duracion:"1h 45m",
        estreno:"16/06/2022",
        id:2
    },
    {
        foto:"./img/doctorstrange.jpg",
        nombre: "doctor strange multiverso",
        genero:"accion/aventura",
        precio:500,
        descripcion:"La vida del famoso neurocirujano Dr. Stephen Strange cambia para siempre cuando un terrible accidente de coche le arrebata el uso de sus manos. Cuando la medicina tradicional le falla, busca la curación en un lugar misterioso llamado Kamar-Taj, que no solo es un centro de curación sino también el frente de una batalla contra fuerzas oscuras ocultas. Strange, armado con poderes mágicos recién adquiridos, debe elegir si regresar a su antigua vida o defender el mundo como su hechicero más poderoso. ",
        duracion:"2h 06m",
        estreno:"02/05/2022",
        id:3
    },
    {
        foto:"./img/topgun.jpg",
        nombre: "top gun maverick",
        genero:"accion/aventura",
        precio:600,
        descripcion:"Maverick, quien lleva 30 años de servicio, es ahora instructor de pilotos militares. Una última misión, un sacrificio final, obliga a este maestro de los cielos a enfrentar las heridas abiertas del pasado y sus temores más profundos. ",
        duracion:"2h 11m",
        estreno:"26/05/2022",
        id:4
    },
    {
        foto:"./img/gemelosiniestro.jpg",
        nombre: "gemelo siniestro",
        genero:"terror/suspenso",
        precio:700,
        descripcion:"Tras la muerte de uno de sus hijos gemelos, Rachel y Anthony se instalan en el campo escandinavo para sanar las heridas anímicas. Allí, sin embargo, ella descubre que una fuerza sobrenatural y maligno quiere llevarse al pequeño que le queda. ",
        duracion:"1h 49m",
        estreno:"16/06/2022",
        id:5
    },
    {
        foto:"./img/thenorthman.jpg",
        nombre: "the northman",
        genero:"aventura/accion",
        precio:200,
        descripcion:"El príncipe Amleth está a punto de convertirse en hombre pero, en ese momento, su tío asesina brutalmente a su padre y secuestra a la madre del niño. Dos décadas después, Amleth es un vikingo que tiene la misión de salvar a su madre ",
        duracion:"2h 17m",
        estreno:"21/04/2022",
        id:6
    },
    {
        foto:"./img/sonic2.jpg",
        nombre: "sonic 2",
        genero:"accion/ciencia ficcion",
        precio:400,
        descripcion:"Después de establecerse en Green Hills, Sonic quiere demostrar que tiene madera de héroe. La prueba de fuego llega con el retorno del malvado Robotnik, y su nuevo compinche, Knuckles, en busca de una esmeralda que destruye civilizaciones. Sonic forma equipo con su propio compañero de fatigas, Tails, y juntos se lanzan a una aventura que les llevará por todo el mundo en busca de la preciada piedra para evitar que caiga en manos equivocadas. ",
        duracion:"2h 2m",
        estreno:"07/04/2022",
        id:7
    }
    ]
const selecPeliculas=document.querySelector("#selecPeliculas");
const button=document.querySelector("#search");



function renderizar () {
    for (const pelicula of carteleraCine) {
       document.querySelector(".card").innerHTML+=`
        <li class="li-item">
        <div class="contenedorFoto">
            <img  class="contenedorImg" src="${pelicula.foto}">
        </div>
          <div class="container"> 
          <h2 class="card-title"> <b>Titulo: ${pelicula.nombre} </b></h2>
          <p class="card-text"> Genero ${pelicula.genero} </p>
          <p class="card-text"> Precio: $${pelicula.precio}</p>
          <p class="card-text"> Duracion:${pelicula.duracion}</p>
          <p class="card-text">Estreno: ${pelicula.estreno}</p>
          <button class="btn btn-secondary" id="detalles${pelicula.id}"> Mas Detalles</button>
          <button class="btn btn-secondary" id="boton${pelicula.id}"> Agregar al carro</button>
          </div>   
        </li>` 
       
    }
    carteleraCine.forEach(pelicula =>document.getElementById(`boton${pelicula.id}`).addEventListener("click",function () {
    agregarCarro(pelicula)
    } ))
    carteleraCine.forEach(pelicula=>document.getElementById(`detalles${pelicula.id}`).addEventListener("click", function (){
    detalles(pelicula)
    }))
   
}
renderizar()
function agregarCarro(nuevaPelicula) {
    carrito.push(nuevaPelicula)
    alert(`agregaste la pelicula ${nuevaPelicula.nombre} al carro`)
    console.log(carrito)
    document.getElementById("tablaCarrito").innerHTML+=`
    <tr>  
    <td>${nuevaPelicula.nombre} </td>
    <td>${nuevaPelicula.precio} </td>
    <td>${nuevaPelicula.duracion} </td>`
}



function detalles (detalle){
     let detalles= carteleraCine.find(elemento=>elemento.id == detalle.id)
     alert(detalles.descripcion)
}




/*function filtrarPeliculas(filtro){
    let filtrar=carteleraCine.filter((el)=>{
        return el.nombre.includes(filtro)
    })
    crearHTML(filtrar);
}

console.log(carteleraCine);


function crearHTML(array){
 let html
    for (const pelicula of array) {
       html=document.querySelector(".card").innerHTML+=`
        <li class="li-item">
        <div class="contenedorFoto">
            <img  class="contenedorImg" src="${pelicula.foto}">
        </div>
          <div class="hola"> 
          <h2 class="card-title"> <b>Titulo: ${pelicula.nombre} </b></h2>
          <p class="card-text"> Genero ${pelicula.genero} </p>
          <p class="card-text"> Precio: $${pelicula.precio}</p>
          <p class="card-text"> Duracion:${pelicula.duracion}</p>
          <p class="card-text">Estreno: ${pelicula.estreno}</p>
          <button class="btn btn-secondary" id="detalles${pelicula.id}"> Mas Detalles</button>
          <button class="btn btn-secondary" id="boton${pelicula.id}"> Agregar al carro</button>
          </div>   
        </li>` 
       
    }
}

crearHTML(carteleraCine)

button.addEventListener("click" ,(e)=>{
   e.preventDefault();
   filtrarPeliculas(search.value)
  })*/
