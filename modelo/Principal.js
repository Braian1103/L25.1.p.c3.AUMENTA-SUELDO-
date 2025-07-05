import Cl_empresa from "./Cl_empresa.js";
import Cl_personal from "./Cl_personal.js";

let empresa = new Cl_empresa();
empresa.agregar(new Cl_personal({cedula: 555, sueldoAd: 200, tipo: 2}));
empresa.agregar(new Cl_personal({cedula: 888, sueldoAd: 500, tipo: 1}));
empresa.agregar(new Cl_personal({ cedula: 777, sueldoAd: 400, tipo: 2}));
empresa.agregar(new Cl_personal({ cedula: 666, sueldoAd: 600, tipo: 1}));
empresa.agregar(new Cl_personal({ cedula: 444, sueldoAd: 800, tipo: 1}));

let salida = document.getElementById("salida");
salida.innerHTML =`
La cédula 555 tiene nuevo sueldo de $ ${empresa.nuevoSueldo(555)}$<br>
La cédula 888 tiene nuevo sueldo de $ ${empresa.nuevoSueldo(888)}$<br>
La cédula 777 tiene nuevo sueldo de $ ${empresa.nuevoSueldo(777)}$<br>
La cédula 666 tiene nuevo sueldo de $ ${empresa.nuevoSueldo(666)}$<br>
La cédula 444 tiene nuevo sueldo de $ ${empresa.nuevoSueldo(444)}$<br><br>
Monto total de aumento: ${empresa.montoTotal()}$<br>
Porcentaje de obreros: ${empresa.porcentaje()}%
`
