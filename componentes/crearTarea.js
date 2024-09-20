import { nuevaTarea } from "../funciones/agregarTarea.js";

const CrearTarea = document.createElement("div");
CrearTarea.style = `
    text-align: center;
    align-item: center;
    justify-content: center
    display-flex: direccion;
    color: red;
`

const tareaInput = document.createElement("input");
tareaInput.placeholder = "Ingresa una tarea";
tareaInput.style = `
    background-color: #33ffb7; 
    
`

const botonEnviar = document.createElement("button");
botonEnviar.textContent = "Enviar";

botonEnviar.addEventListener("click", () => nuevaTarea(tareaInput));

CrearTarea.append(tareaInput);
CrearTarea.append(botonEnviar);

export default CrearTarea;
