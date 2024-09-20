import root from "./componentes/llamadoAlRoot.js";
import titulo from "./componentes/aggTitulo.js";
import CrearTarea from "./componentes/crearTarea.js";
import contenedorTareas from "./componentes/contenedorTareas.js"; 
import Tarea from "../clases/Tarea.js";

const miTarea = new Tarea("Hola mundo");

miTarea.texto = "Tacos";

root.append(miTarea.etiqueta);
root.append(titulo);
root.append(CrearTarea);
root.append(contenedorTareas);

