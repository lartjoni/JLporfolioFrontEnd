export class Educacion {

    id?: number;
    logoEduca: string;
    establecimEduca: string;
    puestoEduca: string;
    fechasEduca: string;

    constructor(
        logoEduca: string,
         establecimEduca: string,
          puestoEduca: string,
           fechasEduca: string) {

        this.logoEduca = logoEduca;
        this.establecimEduca = establecimEduca;
        this.puestoEduca = puestoEduca;
        this.fechasEduca = fechasEduca;
    }

}

