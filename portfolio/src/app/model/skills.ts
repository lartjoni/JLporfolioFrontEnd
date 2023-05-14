export class Skills {
/* private Long id;
    
    private String nombreHabili;
    private Long barraProgreso; */
    id?: number;
    nombreHabili: string;
    barraProgreso: number;
    
    constructor(
        nombreHabili: string,
        barraProgreso: number) {

        this.nombreHabili = nombreHabili;
        this.barraProgreso = barraProgreso;
    }
    
    
}
