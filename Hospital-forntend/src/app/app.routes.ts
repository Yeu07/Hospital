import { Routes } from '@angular/router';
import { MenuGlobal } from './modules/global/components/menu-global/menu-global';

export const routes: Routes = [
  {
    path: '',
    component: MenuGlobal,
    loadChildren: () => import('./routes').then(m => m.RUTAS) 
  }
];