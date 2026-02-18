
import { Component } from '@angular/core';
import { GlobalModule } from '../../global-module';


@Component({
  selector: 'app-menu-global',
  standalone:true,
  imports: [
    GlobalModule
],
  templateUrl: './menu-global.html',
  styleUrl: './menu-global.scss',
})
export class MenuGlobal {

}
