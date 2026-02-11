import { Routes } from '@angular/router';


export const routes: Routes = [

    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path:'services',
        loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
    },
    {
        path:'experiences',
        loadComponent: () => import('./pages/experiences/experiences.component').then( m => m.ExperiencesComponent)
    },
    {
        path:'private-villa',
        loadComponent: () => import('./pages/villas/villas.component').then(m => m.VillasComponent)
    },
    {
        path:'boats',
        loadComponent: () => import('./pages/boats/boats.component').then(m => m.BoatsComponent)
    },
    {
        path:'island',
        loadComponent: () => import('./pages/island/island.component').then(m => m.IslandComponent)
    }
];
