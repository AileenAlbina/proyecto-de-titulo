import { Component, OnInit } from '@angular/core';
import { ApoderadoService } from 'src/app/core/services/apoderado/apoderado.service';
import { Apoderado } from 'src/app/models/apoderado';

@Component({
  selector: 'app-admin-ap',
  templateUrl: './admin-ap.component.html',
  styleUrls: ['./admin-ap.component.css']
})
export class AdminApComponent implements OnInit {

  public listAp: Apoderado[]=[];
  public userList=''; 
   
  constructor(
    private ApoderadoListService: ApoderadoService) 
    { }

  ngOnInit(): void {
    this.ApoderadoListService.getAllList().subscribe((data: Apoderado[])=> {
      this.listAp = data});
  }

}
