import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-perfil-ap',
  templateUrl: './admin-perfil-ap.component.html',
  styleUrls: ['./admin-perfil-ap.component.css']
})
export class AdminPerfilApComponent implements OnInit {

  public isSeleccionado: number=-1;

  constructor() { }

  ngOnInit(): void {
  }

  public CPA()
  {
    console.log("entro");
    this.isSeleccionado=1;
  }
  
  public MPA()
  {
    this.isSeleccionado=3;
  }
}
