import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'admin',
        canActivate: [authGuard], // Protegemos toda la ruta admin
        loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.DashboardComponent),
        children: [
            {
                path: 'home',
                loadComponent: () => import('./pages/dashboard/home/home').then((m) => m.HomeComponent),
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '**',
        redirectTo: 'login',
    },
];
