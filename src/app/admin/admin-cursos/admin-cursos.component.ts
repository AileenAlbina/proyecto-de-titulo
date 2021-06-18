import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/core/services/curso/curso.service';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-admin-cursos',
  templateUrl: './admin-cursos.component.html',
  styleUrls: ['./admin-cursos.component.css']
})
export class AdminCursosComponent implements OnInit {

  public listCurso: Curso[]=[];
  public cursoList='';

  constructor(
    private cursoService: CursoService,
    private router:Router
  ) { 
    
    }

    ngOnInit(): void {
      console.log("al init");
      this.cursoService.getAllList().subscribe((data: Curso[])=> {
        this.listCurso = data
        console.log("al init+ "+data );});
      }
  
    editar(curso: Curso):void
    {
  
        localStorage.setItem("id",curso.idCurso.toString());
        this.router.navigate(["admin/curso-edit"]);
    }
  
    eliminar(pf:Curso):void{
  console.log("entro a eliminar");
      this.cursoService.deleteById(pf);
      this.router.navigate(["admin/admin-profile-prof-func"]);
    }
  
  }



