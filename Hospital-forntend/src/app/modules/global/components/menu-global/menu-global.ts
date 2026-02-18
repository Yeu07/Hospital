import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-menu-global',
  standalone:true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterOutlet,
    MatCardModule,
    RouterLinkWithHref,
    RouterLink
],
  templateUrl: './menu-global.html',
  styleUrl: './menu-global.scss',
})
export class MenuGlobal {

}
