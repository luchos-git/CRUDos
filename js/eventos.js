// este archivo responde a los evento del DOM,
// interactuando con el usuario y el modelo de datos desarrollado en modulos.js

document.addEventListener("DOMContentLoaded", () => {
    //1.cargamos listado de personas
    mostrarPersonas()

    //2.Mostrar formulario para agregar Persona desde el boton "Agregar Persona"
    const btn_agregar= document.querySelector("#btn-agregar")
    btn_agregar.addEventListener("click",()=>{
        document.querySelector("#form-agregar").style.display="block";
    })


    //Ocultar formulario "Agregar persona" desde el boton "cerrar" o X
    document.querySelector(".btn-cerrar-formAgregar").addEventListener("click", (event)=>{
        event.preventDefault();
        document.querySelector("#form-agregar").style.display="none";

    })
   

    
    //evento "submit" formulario "AgregarPersona"
    const form_agregar= document.querySelector("#form-agregar")
    form_agregar.addEventListener("submit", (e)=>{
        e.preventDefault()

        const nuevaPersona={
            nombre: form_agregar.nombre.value,
            edad: form_agregar.edad.value,
            dni: form_agregar.dni.value
        }
        
        agregarPersona(nuevaPersona)
        form_agregar.reset()
        form_agregar.style.display="none"
    })
 

    //----------------------------------------------------------------------------------------------------------
    //El evento de mostraFormularioModificar y cerrar formulario queda dentro de la funcion mostrarPersonas
    //porque pueden ser varios botones y es necesario individualizarlos para capturar los datos de cada persona
    //lo mismo para el boton eliminar queda dentro de la funcion mostrarPersonas
    //----------------------------------------------------------------------------------------------------------


    //evento "submit" formulario buscar
   const form_buscar=document.querySelector("#form-buscar");
   form_buscar.addEventListener("submit", (e)=>{
    e.preventDefault();

    const personaABuscar={
        nombreABuscar: form_buscar.nombre.value,
        dniABuscar: form_buscar.dni.value
    }
console.log(personaABuscar)
    buscarPersona(personaABuscar)
   })

    //boton limpiar filtros
  
   

    //_evento "submit" formulario modificar_

    //tiene que modificar los datos de la persona y subirlo a modificarPersona()

    // const form_agregar= document.querySelector("#form-agregar")
    // form_agregar.addEventListener("submit", (e)=>{
    //     e.preventDefault()

    //     const nuevaPersona={
    //         nombre: form_agregar.nombre.value,
    //         edad: form_agregar.edad.value,
    //         dni: form_agregar.dni.value
    //     }
        
    //     agregarPersona(nuevaPersona)
    //     form_agregar.reset()
    //     form_agregar.style.display="none"
    // })
   
})
