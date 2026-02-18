import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-index',
  imports: [MatCardModule,
    MatIconModule
  ],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class Index {

}
