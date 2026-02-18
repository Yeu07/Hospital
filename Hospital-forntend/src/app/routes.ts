import { Routes } from "@angular/router";
import { globalRoutes } from "./modules/global/global.routing";
import { medicoRoutes } from "./modules/medico/medico.routes";

export const RUTAS: Routes = [
    ...globalRoutes,
    ...medicoRoutes
];