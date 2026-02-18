import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../services/http.service';
import { GlobalModule } from "../../../global/global-module";
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-index',
  imports: [GlobalModule],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})

export class Index implements OnInit {

  
  displayedColumns: string[] = ['DNI', 'Nombre', 'Especialista', 'Acciones'];
  dataSource = new MatTableDataSource<any>([]);

  cantidadTotal = 0;
  cantidadPorPagina = 10;
  numeroDePagina = 0;
  opcionesDePaginado: number[] = [1,5,10,25,100]; 

  textoBusqueda = "";


  constructor(private httpService:HttpService){}

  ngOnInit(): void {
    this.LeerTodo()
  }
  LeerTodo(){
    this.httpService.LeerTodo(this.cantidadPorPagina, this.numeroDePagina, this.textoBusqueda)
    .subscribe((resppuesta: any) => {
      this.dataSource.data = resppuesta.datos.elemento
      this.cantidadTotal = resppuesta.datos.cantidadTotal
    })
  }
  cambiarPagina(event: any){
    this.cantidadPorPagina = event.pageSize;
    this.numeroDePagina = event.pageIndex;

    this.LeerTodo();
  }
}
