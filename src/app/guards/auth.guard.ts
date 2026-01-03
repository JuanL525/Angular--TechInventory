// Importa la función inject que permite obtener instancias de servicios sin constructor
import { inject } from '@angular/core';

// Importa tipos para crear guards de navegación y Router para redireccionar
import { CanActivateFn, Router } from '@angular/router';

// Importa el servicio de autenticación que creamos anteriormente
import { AuthService } from '../services/auth';

// Define un guard de ruta (funcional, estilo moderno de Angular)
export const authGuard: CanActivateFn = (route, state) => { // (Funcion guardia para proteger rutas)
  // Obtiene una instancia del AuthService usando inject() (alternativa a constructor)
    const authService = inject(AuthService);

  // Obtiene una instancia del Router para navegación
    const router = inject(Router);

  // Verifica si el usuario está autenticado usando el computed signal del servicio
    if (authService.isAuthenticated()) {
    // Si SÍ está autenticado permite el acceso a la ruta protegida
        return true;
    }

  // Si NO está logueado redirige al usuario a la página de login
    router.navigate(['/login']);

  // Bloquea el acceso a la ruta protegida
    return false;
};