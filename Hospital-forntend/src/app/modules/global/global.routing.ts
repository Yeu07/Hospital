import { Routes } from "@angular/router";
import { Index } from "./components/index";

export const globalRoutes: Routes = [
    {
        path:"",
        component:Index,
        loadChildren: () => import("./global-module").then(m => m.GlobalModule)

    }
]