export class Alumno {
    id: number;
    nombres: string;
    apellidos: string;
    fechaNacimiento: Date;
    genero: string;

    constructor(id: number, nombres: string, apellidos: string, fechaNacimiento: Date, genero: string) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.genero = genero;
    }

}