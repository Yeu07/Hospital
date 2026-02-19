import { Component } from '@angular/core';
import { GlobalModule } from '../../global-module';


@Component({
  selector: 'app-index',
  imports: [
    GlobalModule
  ],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class Index {

}
