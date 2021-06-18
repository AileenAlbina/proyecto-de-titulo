import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfFuncService } from 'src/app/core/services/prof-func/prof-func.service';
import { Profe } from 'src/app/models/profe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-perfil-pf',
  templateUrl: './admin-perfil-pf.component.html',
  styleUrls: ['./admin-perfil-pf.component.css']
})
export class AdminPerfilPfComponent implements OnInit {

  public listPF: Profe[]=[];
  public userList='';

  constructor(
    private ProfFuncListService: ProfFuncService,
    private router:Router
  ) { 
    
  }

  ngOnInit(): void {
    this.ProfFuncListService.getAllList().subscribe((data: Profe[])=> {
      this.listPF = data});
  
  }

  editar(pf: Profe):void
  {

      localStorage.setItem("id",pf.rut.toString());
      this.router.navigate(["admin/user-edit"]);
  }

  eliminar(pf:Profe):void{
console.log("entro a eliminar");
    this.ProfFuncListService.deleteById(pf);
    this.router.navigate(["admin/admin-profile-prof-func"]);
  }


}
