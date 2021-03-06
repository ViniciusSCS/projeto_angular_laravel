import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router"

import {HomeComponent} from "./home/home.component";
import {SobreComponent} from "./sobre/sobre.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'sobre',
        component: SobreComponent
    }
]

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes)
