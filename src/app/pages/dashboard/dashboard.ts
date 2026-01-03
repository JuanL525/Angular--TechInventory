import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent], // Importamos el sidebar y el outlet
  template: `
    <div class="dashboard-layout">
      <app-sidebar class="sidebar"></app-sidebar>
      <main class="content">
        <router-outlet></router-outlet> </main>
    </div>
  `,
  styles: [`
    .dashboard-layout { display: flex; height: 100vh; }
    .sidebar { width: 250px; background: #2c3e50; color: white; }
    .content { flex: 1; padding: 20px; overflow-y: auto; background: #ecf0f1; }
  `]
})
export class DashboardComponent {}