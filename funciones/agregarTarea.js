import tareaInput from "../componentes/crearTarea.js";
import contenedorTareas from "../componentes/contenedorTareas.js";

function nuevaTarea(input) {
    const tareaTexto = input.value;

    const parrafo = document.createElement("p");
    parrafo.textContent = tareaTexto;
    parrafo.style.textAlign = "center";

    const inputActualizar = document.createElement("input");
    inputActualizar.placeholder = "Ingresa nuevo texto";

    const tacharTarea = document.createElement("input");
    tacharTarea.type = "checkbox";

    // Evento para tachar la tarea
    tacharTarea.addEventListener("change", () => {
        if (tacharTarea.checked) {
            parrafo.style.textDecoration = "line-through"; // Tacha el texto
        } else {
            parrafo.style.textDecoration = "none"; // Quita el tachado
        }
    });

    const eliminarTarea = document.createElement("button");
    eliminarTarea.textContent = "Eliminar";
    eliminarTarea.style.backgroundColor = "#e6ff33";
    eliminarTarea.addEventListener("click", () => eliminarTexto(parrafo, eliminarTarea, inputActualizar, tacharTarea));

    const botonActualizar = document.createElement("button");
    botonActualizar.textContent = "Actualizar";
    botonActualizar.style.backgroundColor = "#33e4ff";
    botonActualizar.style.border = "1px solid grey";
    botonActualizar.style.cursor = "pointer";

    botonActualizar.addEventListener("click", () => 
        actualizarTexto(inputActualizar, parrafo)
    );

    // Añadimos los elementos al contenedor
    contenedorTareas.append(tacharTarea, parrafo, inputActualizar, botonActualizar, eliminarTarea);
    contenedorTareas.style.textAlign = "center";
}

function actualizarTexto(input, tarea) {
    if (input.value) {
        tarea.textContent = input.value;
        input.value = "";
        input.placeholder = "Tarea actualizada!";
        setTimeout(() => {
            input.placeholder = "Ingresa tu tarea";
        }, 3000);
    } else {
        alert("Por favor ingresa un texto válido.");
    }
}

function eliminarTexto(tarea, boton, input, checkbox) {
    tarea.remove();
    boton.remove();
    input.remove();
    checkbox.remove();
}

export { nuevaTarea, eliminarTexto };
