import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/core/services/curso/curso.service';

import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.css']
})
export class EditCursoComponent implements OnInit {

  public listCurso: Curso[]=[];
  public cursoList='';

  constructor(private cursoService: CursoService,) { }

  ngOnInit(): void {
    this.cursoService.getAllList().subscribe((data: Curso[])=> {
      this.listCurso = data});
  
  }

}
