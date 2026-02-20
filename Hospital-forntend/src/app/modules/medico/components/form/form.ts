import { Component, inject, OnInit } from '@angular/core';
import { GlobalModule } from '../../../global/global-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../../services/http.service';
import { ToastrService } from 'ngx-toastr';
import { Medico } from '../../interface';

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

  constructor(private fb: FormBuilder, private httpService:HttpService, private toastr:ToastrService){
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

      const medico: Medico = {
        id: 0,
        dni: values.dni,
        nombre: values.nombre,
        apellido: values.apellido,
        habilitado: values.habilitado, 
        esEspecialista: values.esEspecialista
      };

      this.httpService.Crear(medico)
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
      const medico: Medico = {
        id: this.data.medico.id,
        dni: values.dni,
        nombre: values.nombre,
        apellido: values.apellido,
        habilitado: values.habilitado, 
        esEspecialista: values.esEspecialista
      };

      this.httpService.Editar(medico)
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
        esEspecialista:[{value:false, disabled:false}, [Validators.required]] ,
        habilitado:[{value:true, disabled:false}, [Validators.required]]
      });
    }
    else{
      this.formGroup = this.fb.group({
        dni:[{value:this.data.medico.dni, disabled:false}, [Validators.required]],
        nombre:[{value:this.data.medico.nombre, disabled:false}, [Validators.required]],
        apellido:[{value:this.data.medico.apellido, disabled:false}, [Validators.required]],
        esEspecialista:[{value:this.data.medico.esEspecialista, disabled:false}, [Validators.required]] ,
        habilitado:[{value:this.data.medico.habilitado, disabled:false}, [Validators.required]]
      });
    }

    
  }
}
