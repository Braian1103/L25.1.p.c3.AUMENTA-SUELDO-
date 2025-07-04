import Cl_empresa from "./Cl_empresa.js";
import Cl_personal from "./Cl_personal.js";

let empresa = new Cl_empresa();
empresa.agregar(new Cl_personal(111, 1500, 1));
empresa.agregar(new Cl_personal(222, 2000, 2));
empresa.agregar(new Cl_personal(333, 1800, 2));
empresa.agregar(new Cl_personal(444, 2200, 1));
empresa.agregar(new Cl_personal(555, 1600, 1));

let salida = document.getElementById("salida");
salida.innerHTML =`
Nuevo sueldo: ${empresa.nuevoSueldo()}$<br>
Monto total de aumento: ${empresa.montoTotal()}$<br>
Porcentaje de obreros: ${empresa.porcentaje()}%
`
