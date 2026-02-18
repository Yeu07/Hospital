import { Routes } from "@angular/router";
import { Index } from "./components/index";

export const medicoRoutes: Routes = [
    {
        path:"medico/index",
        component:Index,
        loadChildren: () => import("./medico-module").then(m => m.MedicoModule)

    }
]