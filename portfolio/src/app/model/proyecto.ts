export class Proyecto {
/* private Long id;   
    
    private String nombreProye;
    private String descriProye;
    private String direUrlProye; */
    id?: number;
    nombreProye: string;
    descriProye: string;
    direUrlProye: string;
    
    constructor(
        nombreProye: string,
        descriProye: string,
        direUrlProye: string,) {

        this.nombreProye = nombreProye;
        this.descriProye = descriProye;
        this.direUrlProye = direUrlProye;
    }

}
