export class Experiencia {

    id?: number;
    logoExper: string;
    establecimExper: string;
    puestoExper: string;
    fechasExper: string;

    constructor(
        logoExper: string,
        establecimExper: string,
        puestoExper: string,
        fechasExper: string) {

        this.logoExper = logoExper;
        this.establecimExper = establecimExper;
        this.puestoExper = puestoExper;
        this.fechasExper = fechasExper;
    }

}
