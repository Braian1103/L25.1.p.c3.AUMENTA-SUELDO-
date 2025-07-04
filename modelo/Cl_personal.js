export default class Cl_personal {
    constructor(cedula, sueldoAd, tipo) {
        this.cedula = cedula;
        this.sueldoAd = sueldoAd;
        this.tipo = tipo;
    }
    set cedula(c) {
        this._cedula = c;
    }
    get cedula() {
        return this._cedula;
    }
    set sueldoAd(s) {
        this._sueldoAd = s;
    }
    get sueldoAd() {
        return this._sueldoAd;
    }
    set tipo(t) {
        this._tipo = t;
    }
    get tipo() {
        return this._tipo;
    }
}