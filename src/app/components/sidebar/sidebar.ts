import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="p-4">
      <h3>Admin Panel</h3>
      <p>Hola, {{ authService.currentUser?.name }}</p>
      <hr>
      <nav>
        <a routerLink="/admin/home" routerLinkActive="active">Inventario</a>
        </nav>
      <button (click)="authService.logout()">Cerrar Sesión</button>
    </div>
  `,
  styles: [`
    .p-4 { padding: 1rem; }
    a { display: block; color: #bdc3c7; text-decoration: none; padding: 10px 0; }
    a:hover { color: white; }
    .active { color: #3498db; font-weight: bold; }
    button { margin-top: 20px; background: #e74c3c; color: white; border: none; padding: 5px 10px; cursor: pointer; width: 100%; }
  `]
})
export class SidebarComponent {
  public authService = inject(AuthService);
}