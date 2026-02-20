import { Component, inject, OnInit } from '@angular/core';
import { GlobalModule } from '../../../global/global-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServicePaciente } from '../../../../services/httpPaciente.service';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from '../../interfacePaciente';

@Component({
  selector: 'app-form',
  imports: [GlobalModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form implements OnInit {

  formGroup!:FormGroup;

  data = inject(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<Form>);

  constructor(private fb: FormBuilder, private httpService:HttpServicePaciente, private toastr:ToastrService){
  }

  ngOnInit(): void {
    this.initForm()
  }

  cancelar(){
    this.dialogRef.close()
  }

  guardar(){

    const values = this.formGroup.value;
    

    if(this.data.tipo == "CREAR"){

      const paciente: Paciente = {
        id: 0,
        dni: values.dni,
        nombre: values.nombre,
        apellido: values.apellido,
        direccion:values.direccion,
        correo:values.correo,
        celular:values.celular
      };

      this.httpService.Crear(paciente)
      .subscribe({
        next: (idCreado: number) => {
          this.toastr.success('Elemento creado satisfactoriamente', 'Confirmación');
          this.dialogRef.close(idCreado); 
          return idCreado;
        },
        error: (err) => {
          this.toastr.error('Ocurrió un error al guardar', 'Error');
        }
      });
    }else{
      const paciente: Paciente = {
        id: this.data.paciente.id,
        dni: values.dni,
        nombre: values.nombre,
        apellido: values.apellido,
        direccion:values.direccion,
        correo:values.correo,
        celular:values.celular
      };

      this.httpService.Editar(paciente)
      .subscribe({
        next: (idCreado: number) => {
          this.toastr.success('Elemento creado satisfactoriamente', 'Confirmación');
          this.dialogRef.close(idCreado); 
          return idCreado;
        },
        error: (err) => {
          this.toastr.error('Ocurrió un error al guardar', 'Error');
        }
      });
    }
  }

  initForm(){
    if(this.data.tipo == "CREAR"){
      this.formGroup = this.fb.group({
        dni:[{value:null, disabled:false}, [Validators.required]],
        nombre:[{value:null, disabled:false}, [Validators.required]],
        apellido:[{value:null, disabled:false}, [Validators.required]],
        direccion:[{value:null, disabled:false}, [Validators.required]],
        correo:[{value:null, disabled:false}, [Validators.required]],
        celular:[{value:null, disabled:false}, [Validators.required]],
        
      });
    }
    else{
      this.formGroup = this.fb.group({
        dni:[{value:this.data.paciente.dni, disabled:false}, [Validators.required]],
        nombre:[{value:this.data.paciente.nombre, disabled:false}, [Validators.required]],
        apellido:[{value:this.data.paciente.apellido, disabled:false}, [Validators.required]],
        direccion:[{value:this.data.paciente.direccion, disabled:false}, [Validators.required]],
        correo:[{value:this.data.paciente.correo, disabled:false}, [Validators.required]],
        celular:[{value:this.data.paciente.celular, disabled:false}, [Validators.required]],
        
      });
    }

    
  }
}
