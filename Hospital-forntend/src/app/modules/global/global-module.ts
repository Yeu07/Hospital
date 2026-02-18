import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ToastrModule} from 'ngx-toastr'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterOutlet,
    MatCardModule,
    RouterLinkWithHref,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatTooltipModule,
    ToastrModule.forRoot({
      closeButton:true,
      progressBar:true,
      enableHtml:true
    }),

  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    RouterOutlet,
    MatCardModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatTooltipModule,
    ToastrModule
  ]
})
export class GlobalModule { }
