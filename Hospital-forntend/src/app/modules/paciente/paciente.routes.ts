import { Routes } from "@angular/router";
import { Index } from "./components/index";

export const pacienteRoutes: Routes = [
    {
        path:"paciente/index",
        component:Index,
        loadChildren: () => import("./paciente-module").then(m => m.PacienteModule)

    }
]