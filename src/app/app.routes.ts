import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () =>
            import('./components/home/home').then((m) => m.Home)
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirección inicial
    { path: '**', redirectTo: 'home' } // ruta por defecto
];