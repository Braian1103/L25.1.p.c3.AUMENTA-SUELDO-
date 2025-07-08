import Cl_empresa from "./Cl_empresa.js";
import Cl_personal from "./Cl_personal.js";

let empresa = new Cl_empresa();
let personal1 = new Cl_personal({cedula: 555, sueldoAd: 200, tipo: 2});
let personal2 = new Cl_personal({cedula: 888, sueldoAd: 500, tipo: 1});
let personal3 = new Cl_personal({cedula: 777, sueldoAd: 400, tipo: 2});
let personal4 = new Cl_personal({cedula: 666, sueldoAd: 600, tipo: 1});
let personal5 = new Cl_personal({cedula: 444, sueldoAd: 800, tipo: 1});

empresa.agregar(personal1);
empresa.agregar(personal2);
empresa.agregar(personal3);
empresa.agregar(personal4);
empresa.agregar(personal5);

/**
 * empresa.agregar(new Cl_personal({cedula: 555, sueldoAd: 200, tipo: 2})); = forma mas corta
 * empresa.agregar(new Cl_personal({cedula: 888, sueldoAd: 500, tipo: 1}));
 * empresa.agregar(new Cl_personal({cedula: 777, sueldoAd: 400, tipo: 2})); 
 * empresa.agregar(new Cl_personal({cedula: 666, sueldoAd: 600, tipo: 1}));
 * empresa.agregar(new Cl_personal({cedula: 444, sueldoAd:800,  tipo: 1}));
 */

let mostrarTabla = (t) => {
    return `
    <tr>
        <td>${t.cedula}</td>
        <td>${t.sueldoAd}</td>
        <td>${t.tipo}</td>
    </tr>
    `;
}

let salida = document.getElementById("salida");
salida.innerHTML =`
<table>
    <tr>
        <th>Cedula</th>
        <th>Sueldo</th>
        <th>Tipo</th>
    </tr>
    ${mostrarTabla(personal1)}
    ${mostrarTabla(personal2)}
    ${mostrarTabla(personal3)}
    ${mostrarTabla(personal4)}
    ${mostrarTabla(personal5)}
</table><br>
La cédula 555 tiene nuevo sueldo de $ ${empresa.nuevoSueldo(555)}$<br>
La cédula 888 tiene nuevo sueldo de $ ${empresa.nuevoSueldo(888)}$<br>
La cédula 777 tiene nuevo sueldo de $ ${empresa.nuevoSueldo(777)}$<br>
La cédula 666 tiene nuevo sueldo de $ ${empresa.nuevoSueldo(666)}$<br>
La cédula 444 tiene nuevo sueldo de $ ${empresa.nuevoSueldo(444)}$<br><br>
Monto total de aumento: ${empresa.montoTotal()}$<br>
Porcentaje de obreros: ${empresa.porcentaje()}%
`
