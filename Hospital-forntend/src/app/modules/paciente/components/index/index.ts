import { Component, OnInit } from '@angular/core';
import { HttpServicePaciente } from '../../../../services/httpPaciente.service';
import { GlobalModule } from "../../../global/global-module";
import { MatTableDataSource } from '@angular/material/table';
import { MatTooltip } from "@angular/material/tooltip";
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { Form } from '../form/form';
import { Paciente } from '../../interfacePaciente';

@Component({
  selector: 'app-index',
  imports: [GlobalModule, MatTooltip],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})

export class Index implements OnInit {

  
  displayedColumns: string[] = ['DNI', 'Nombre','Apellido', 'Direccion','Celular','Correo', 'Acciones'];
  dataSource = new MatTableDataSource<any>([]);

  cantidadTotal = 0;
  cantidadPorPagina = 10;
  numeroDePagina = 0;
  opcionesDePaginado: number[] = [1,5,10,25,100]; 

  textoBusqueda = "";


  constructor(private httpService:HttpServicePaciente, private toastr:ToastrService, private dialog:MatDialog){}

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

  eliminar(pacienteId: number){
    let confirmacion = confirm('Estas seguro/a que desea eliminar el elemento?');

    if(confirmacion){
      let ids = [pacienteId];

      this.httpService.Eliminar(ids)
        .subscribe((resppuesta: any) => {
          this.toastr.success('Elemento eliminado satisfactoriamente','Confirmaacion')
          this.LeerTodo()
      })
    }
  }

  crearPaciente(){
    const dialogRef = this.dialog.open(Form, {
      disableClose:true,
      autoFocus:true,
      closeOnNavigation:false,
      position: {top: '30px'},
      width: '700px',
      data: {
        tipo: 'CREAR'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null){
        this.LeerTodo();
      }
    });
  }

  editarPaciente(paciente: Paciente){
    const dialogRef = this.dialog.open(Form, {
      disableClose:true,
      autoFocus:true,
      closeOnNavigation:false,
      position: {top: '30px'},
      width: '700px',
      data: {
        tipo: 'EDITAR',
        paciente: paciente
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.LeerTodo();
      }
    });
  }
}
