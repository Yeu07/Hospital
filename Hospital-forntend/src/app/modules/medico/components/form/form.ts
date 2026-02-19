import { Component, inject, OnInit } from '@angular/core';
import { GlobalModule } from '../../../global/global-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder){
  }

  ngOnInit(): void {
    this.initForm()
  }

  cancelar(){
    this.dialogRef.close()
  }

  guardar(){}

  initForm(){
    this.formGroup = this.fb.group({
      dni:[{value:null, disabled:false}, [Validators.required]],
      nombre:[{value:null, disabled:false}, [Validators.required]],
      apellido:[{value:null, disabled:false}, [Validators.required]],
      esEspecialista:[{value:false, disabled:false}, [Validators.required]] ,
      habilitado:[{value:true, disabled:false}, [Validators.required]]
    });
  }
}
