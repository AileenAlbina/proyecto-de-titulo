export interface Alumno {
  [x: string]: any;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    email: string;
    rut: string;
    telefono: number;
	direccion: string;	
	esApoderado: boolean;
    esProfOFunc: boolean;
	esAdmin: boolean;
}
