import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HorarioInterfaz } from './horario-interfaz';
import * as horarioArray from 'src/app/data/data-horario.json';
import * as horasClase from 'src/app/data/data-horasClase.json'
import {Horas} from './horas';


@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  public arregloHorario: any = this.getHorarioArray();
  public horarioList: any = this.ordenarHorarioArray(this.arregloHorario);
  public horas: any = this.getHoras();

  ordenarHorarioArray(horario)
  {
    horario.sort(function(a,b){
 
      if(a.hora_inicio > b.hora_inicio)
          return 1; 
  
      if(a.hora_inicio < b.hora_inicio)
          return -1;
      
      if(a.hora_inicio == b.hora_inicio)
      {
          if(a.dia > b.dia)
              return 1;
  
          if(a.dia < b.dia)
          return -1;     
      }
    
    });
  
  }
  
  getHorarioArray():Observable<Array<HorarioInterfaz>>{
    return (horarioArray as any).horario;
  }

  getHoras():Observable<Array<Horas>>{
    return (horasClase as any).horas;
  }
  
  constructor() {
    
   }

    ngOnInit(): void {
  }

}
