import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [MatCardModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class Index {

}
