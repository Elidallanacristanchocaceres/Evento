import { nuevaTarea } from "../funciones/agregarTarea.js";

const CrearTarea = document.createElement("div");

const tareaInput = document.createElement("input");
tareaInput.placeholder = "Ingresa una tarea";

const botonEnviar = document.createElement("button");
botonEnviar.textContent = "Enviar";

botonEnviar.addEventListener("click", () => nuevaTarea(tareaInput));

CrearTarea.append(tareaInput);
CrearTarea.append(botonEnviar);

export default CrearTarea;
