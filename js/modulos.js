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
const mostrarPersonas=(personasEncontradas)=>{
    let contenedorPersonas=document.querySelector('#listadoPersonas')
    contenedorPersonas.innerHTML = ''

    if(personasEncontradas){

        personasEncontradas.forEach( p => {   
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

    }else{
   
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
            <button class="btn-modificar" onclick = "mostrarFormModificar('${p.nombre}', ${p.edad}, ${p.dni})">Modificar</button>
            <button class="btn-eliminar" onclick="eliminarPersona(${p.dni})">Eliminar</button>
        </div>
        </div>`
    })
}
}
}

//funcion para buscar Personas por nombre o dni
const buscarPersona = (personaABuscar) => {
   let personas = JSON.parse(localStorage.getItem('personas'));
   const personasEncontradas = personas.filter(persona => persona.nombre == personaABuscar.nombreABuscar || persona.dni == personaABuscar.dniABuscar)
   console.log(personasEncontradas)
   mostrarPersonas(personasEncontradas)
}



//funcion Listado de Personas con filtros de busqueda por nombre y/o dni


//funcion para eliminar un registro de persona segun el DNI
const eliminarPersona = (dni) => {
    if(confirm("seguro desea eliminar?")){
    personas = JSON.parse(localStorage.getItem("personas"));
    indice = personas.findIndex(p=>p.dni==dni);
    personas.splice(indice, 1);
    localStorage.setItem("personas", JSON.stringify(personas));
    mostrarPersonas();
    mostrarMensaje(`registro eliminado`);
    }
}


//funcion intermedia para modificar datos, carga datos guardados de una persona en el formulario y lo muestra
const mostrarFormModificar = (nombreActual,edadActual, dni)=>{
    console.log(nombreActual, edadActual, dni);

    document.querySelector('#form-modificar').innerHTML=`
    <div class="cerrar"><button class="btn-cerrar-formModif">X</button></div>
                    <h3>Modificar datos persona DNI ${dni}</h3>
                    <p> Ingresar nombre y/o edad a modificar </p>
                    <input type="hidden" name="dni" value="${dni}">
                    <input type="text" name="nombre" value="${nombreActual}" required>
                    <input type="text" name="edad" value="${edadActual}" required>
                    <input type="submit" name="submit" value="Modificar">`;
    document.querySelector('#form-modificar').style.display = 'block';
}


//funcion modificar Datos de una persona
const modificarPersona=(nuevosDatos)=>{
    personas=JSON.parse(localStorage.getItem('personas'))
    p=personas.find(p=>p.dni==nuevosDatos.dni)
    p.nombre=nuevosDatos.nombre
    p.edad=nuevosDatos.edad
    localStorage.setItem("personas", JSON.stringify(personas))
    mostrarPersonas()
    mostrarPersonas("registro actualizado")
}




