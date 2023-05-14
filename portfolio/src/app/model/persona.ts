export class Persona {
    id?: number;
    nombreYapellido: string;
    fondo: string;
    fotoPersona: string;
    oficio: string;
    textoContacto: string;
    contactoLink: string;
    logoDerecha: string;
    textoDerecho: string;
    acercaDeMi: string;


    constructor(
        nombreYapellido: string, fondo: string, fotoPersona: string, oficio: string,
        textocontacto: string, contactoLink: string, logoDerecha: string, textoDerecho: string, acercaDeMi: string,) {
       
        this.nombreYapellido = nombreYapellido;
        this.fondo = fondo;
        this.fotoPersona = fotoPersona;
        this.textoContacto = textocontacto;
        this.oficio = oficio;
        this.contactoLink = contactoLink;
        this.logoDerecha = logoDerecha;
        this.textoDerecho = textoDerecho;
        this.acercaDeMi = acercaDeMi;
    }
}
