import { Asignatura } from "./asignatura";
import { Comunicacion } from "./comunicacion";
import { Curso } from "./curso";

export interface Profe {
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    email: string;
    clave: string;
    rut: string;
    telefono: number;
	direccion: string;	
	esApoderado: boolean;
    esProfOFunc: boolean;
	esAdmin: boolean;
    cantidaHorasContrata:number,
    profJefe:boolean,
    comunicaciones:Comunicacion,
    asignaturas: Asignatura,
    cursoProfJefe:Curso

}
