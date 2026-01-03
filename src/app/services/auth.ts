// Importa decoradores y funciones esenciales de Angular Core
import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';

// Importa Router para redireccionar al usuario después de login/logout
import { Router } from '@angular/router';

// Importa función para detectar si estamos ejecutando en un navegador
import { isPlatformBrowser } from '@angular/common';

// Decorador que marca esta clase como un servicio inyectable en Angular
@Injectable({
  providedIn: 'root'  // Crea un Singleton disponible en toda la aplicación automáticamente
})
export class AuthService {  // Define la clase AuthService para manejar autenticación

  // Signal privado para almacenar el estado del usuario (reactivo)
  // Contiene un objeto con nombre y email, o null si no hay usuario logueado
  private _currentUser = signal<{name: string, email: string} | null>(null);

  // Computed signal público que se calcula automáticamente basado en _currentUser
  // Devuelve true si hay usuario, false si es null
  public isAuthenticated = computed(() => this._currentUser() !== null);

  // Inyecta el servicio Router usando la función inject() (alternativa moderna al constructor)
  private router = inject(Router);
  
  // Inyecta PLATFORM_ID para detectar si estamos en navegador o servidor (SSR)
  private platformId = inject(PLATFORM_ID);

  constructor() { 
    // Verificamos si estamos en el navegador antes de acceder a localStorage
    // Esto es importante para Server-Side Rendering (SSR) porque localStorage no existe en servidor
    if (isPlatformBrowser(this.platformId)) {
      // Intenta recuperar usuario guardado previamente en el navegador
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        // Si existe usuario guardado, actualiza el signal con esos datos
        this._currentUser.set(JSON.parse(storedUser));
      }
    }
  }

  // Método para iniciar sesión - recibe email y contraseña, devuelve boolean
  login(email: string, pass: string): boolean {
    // Simula validación con credenciales 
    if (email === 'admin@test.com' && pass === '123456') {
      // Crea objeto usuario con los datos
      const user = { name: 'Administrador', email: email };
      
      // Actualiza el signal reactivo (notifica automáticamente a toda la app)
      this._currentUser.set(user);
      
      // Guardamos en localStorage solo si estamos en navegador
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('user', JSON.stringify(user));
      }
      return true;  // Login exitoso
    }
    return false;  // Login fallido
  }

  // Metodo para cerrar sesión
  logout() {
    // Establece el signal a null (notifica automáticamente a toda la app)
    this._currentUser.set(null);
    
    // Borra el usuario de localStorage solo si estamos en navegador
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('user');
    }
    
    // Redirige al usuario a la página de login
    this.router.navigate(['/login']);
  }

  // Getter público para obtener el valor actual del signal (solo lectura)
  get currentUser() {
    return this._currentUser();  // Retorna el valor actual del signal
  }
}