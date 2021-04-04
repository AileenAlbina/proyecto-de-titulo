import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HorarioInterfaz } from './horario-interfaz';
import * as horarioArray from 'src/app/data/data-horario.json';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  
  getHorarioArray():Observable<Array<HorarioInterfaz>>{
    return (horarioArray as any).horario;
  }

  constructor() {
    
   }

    ngOnInit(): void {
  }

}
