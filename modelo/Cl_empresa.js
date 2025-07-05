export default class Cl_empresa {
    constructor(){
        this.arrayPersonal = [];
    }
    agregar(personal){
        this.arrayPersonal.push(personal);
    }
    nuevoSueldo(cedula){
        let aumento = 0;
        this.arrayPersonal.forEach((p) =>{
            /*switch(true){
                case (p.tipo === 1):
                    aumento = p.sueldoAd + (p.sueldoAd * 0.20);
                    break;
                case (p.tipo === 2):
                    aumento = p.sueldoAd + (p.sueldoAd * 0.10);
                    break;
            }*/
           if((p.tipo === 1) && (p.cedula === cedula)){
                aumento = p.sueldoAd + (p.sueldoAd * 0.20);
            }if((p.tipo === 2) && (p.cedula === cedula)){
                aumento = p.sueldoAd + (p.sueldoAd * 0.10);
            }
        })
        return aumento;
    }
    montoTotal(){
        let acNuevoSueldo = 0;
        let acSueldo = 0;
        this.arrayPersonal.forEach((p) =>{
            acSueldo += p.sueldoAd
            acNuevoSueldo += this.nuevoSueldo(p.cedula);
            /*p.tipo === 1 ? 
            acNuevoSueldo += p.sueldoAd + (p.sueldoAd * 0.20) : 
            acNuevoSueldo += p.sueldoAd + (p.sueldoAd * 0.10);*/
        });
        return acNuevoSueldo - acSueldo;
    }
    porcentaje(){
        let acObreros = 0;
        let acPersonal = 0;
        this.arrayPersonal.forEach((p) =>{
            acPersonal++
            if(p.tipo === 1){
                acObreros++
            }
        })
        return (acObreros / acPersonal) * 100; 
    }
}