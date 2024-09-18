import tareaInput from "../componentes/crearTarea.js";
import contenedorTareas from "../componentes/contenedorTareas.js";

function nuevaTarea(input) {
    const tareaTexto = input.value;

    const parrafo = document.createElement("p");
    parrafo.textContent = tareaTexto;
    
    const eliminarTarea = document.createElement("button");
    eliminarTarea.textContent = "Eliminar";
    eliminarTarea.addEventListener("click", () => eliminarTexto(parrafo, eliminarTarea));
    
    contenedorTareas.append(parrafo, eliminarTarea);
}

function eliminarTexto(tarea, boton) {
    tarea.remove();
    boton.remove();
}

export { nuevaTarea, eliminarTexto };
