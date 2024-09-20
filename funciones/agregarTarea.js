import tareaInput from "../componentes/crearTarea.js";
import contenedorTareas from "../componentes/contenedorTareas.js";

function nuevaTarea(input) {
    const tareaTexto = input.value;

    const parrafo = document.createElement("p");
    parrafo.textContent = tareaTexto;
    parrafo.style = `
        text-align: center;
        align-item: center;
        justify-content: center
        display-flex: direccion;
`

    const eliminarTarea = document.createElement("button");
    eliminarTarea.textContent = "Eliminar";
    eliminarTarea.addEventListener("click", () => eliminarTexto(parrafo, eliminarTarea));
    eliminarTarea.style = `
        background-color: #e6ff33;
    `


    const botonActualizar = document.createElement("button");
    botonActualizar.textContent = "Actualizar";
    botonActualizar.style = `
        background-color: #33e4ff;
        border: 1px solid grey;
        cursor: pointer;
    `

    botonActualizar.addEventListener("click", () =>
        actualizarTexto(botonActualizar, parrafo));

    contenedorTareas.append(parrafo, botonActualizar, eliminarTarea);
    contenedorTareas.style = `
        text-align: center;
        align-item: center;
        justify-content: center
        display-flex: direccion;
        color: red;
    `
}

function actualizarTexto(nuevaTarea, tarea) {
    tarea.textContent = nuevaTarea.value;
    nuevaTarea.value = "";
    nuevaTarea.placeholder = "Tarea actualizada!";
    setTimeout(() => {
        nuevaTarea.placeholder = "Ingresa tu tarea";
    }, 3000);
}

function eliminarTexto(tarea, boton, nuevaTarea) {
    tarea.remove();
    boton.remove();
    nuevaTarea.remove();
}

export { nuevaTarea, eliminarTexto };
