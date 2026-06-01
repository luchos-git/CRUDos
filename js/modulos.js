//este archivo contiene todas las funciones en la que intervienen los datos
//funciones que efectivamente desarrollan el CRUD (Create, read, update, delete) de los datos involucrados
//en este caso los almacenados en el localStorage

//funcion agregarPersona

const agregarPersona=(nuevaPersona)=>{
    personas = JSON.parse(localStorage.getItem("personas")) || []
    personas.push(nuevaPersona)
    localStorage.setItem("personas", JSON.stringify(personas))
    mostrarMensaje("nuevo persona agregada")
    mostrarPersonas()
}

//funcion Listado de todos los registros de Personas
const mostrarPersonas=()=>{
    let contenedorPersonas=document.querySelector('#listadoPersonas')
    contenedorPersonas.innerHTML = ''
   
    personas=JSON.parse(localStorage.getItem('personas'))
    
    
    if(personas){
    personas.forEach( p => {   
       contenedorPersonas.innerHTML += ` <div class="persona">
        <div class="info">
            <p>Nombre: ${p.nombre}</p>
            <p>Edad: ${p.edad}</p>
            <p>Dni: ${p.dni}</p>
        </div>
        <div class="botones">
            <button class="btn-modificar">Modificar</button>
            <button class="btn-eliminar">Eliminar</button>
        </div>
        </div>`
    })
}
}

//funcion para buscar Personas por nombre o dni


//funcion Listado de Personas con filtros de busqueda por nombre y/o dni


//funcion para eliminar un registro de persona segun el DNI


//funcion intermedia para modificar datos, carga datos guardados de una persona en el formulario y lo muestra


//funcion modificar Datos de una persona




