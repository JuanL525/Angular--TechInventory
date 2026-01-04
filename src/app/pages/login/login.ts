import { Component, inject } from '@angular/core';

// Importa herramientas para formularios reactivos
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
// FormBuilder = Herramienta para crear formularios de forma declarativa
// ReactiveFormsModule = Módulo necesario para usar formularios reactivos
// Validators = Validadores predefinidos (required, email, minLength, etc.)

// Importa Router para navegación programática (redirigir al usuario)
import { Router } from '@angular/router';

// Importa nuestro servicio personalizado de autenticación
import { AuthService } from '../../services/auth';

// Importa CommonModule para usar directivas comunes como *ngIf, *ngFor
import { CommonModule } from '@angular/common';

// Decorador @Component convierte una clase TypeScript normal en un componente Angular
@Component({ 
  // Define el nombre de la etiqueta HTML para usar este componente (<app-login>)
  selector: 'app-login',
  
  // Componente standalone (moderno): No necesita ser declarado en módulos
  standalone: true,
  
  // Módulos que este componente necesita para funcionar
  imports: [ReactiveFormsModule, CommonModule],
  // ReactiveFormsModule = necesario para formularios reactivos [formGroup], formControlName
  // CommonModule = necesario para directivas estructurales *ngIf, *ngFor
  
  // Ruta al archivo HTML que contiene la plantilla (vista) del componente
  templateUrl: './login.html',
  
  // Ruta al archivo CSS con estilos específicos de este componente
  styleUrl: './login.css'
})
// Define la clase del componente LoginComponent
export class LoginComponent {
  // Inyecta FormBuilder usando inject() (alternativa moderna al constructor)
  // FormBuilder permite crear formularios reactivos de forma fácil
  private fb = inject(FormBuilder);
  
  // Inyecta nuestro servicio de autenticación para validar credenciales
  private authService = inject(AuthService);
  
  // Inyecta Router para redireccionar al usuario después del login exitoso
  private router = inject(Router);
  
  // Variable pública para controlar si se muestra error de login en la plantilla
  // Inicialmente false, se vuelve true si las credenciales son incorrectas
  public loginError = false;

  // Crea un formulario reactivo usando FormBuilder
  public myForm = this.fb.group({
    // Campo email con valor por defecto 'admin@test.com'
    // Validadores: required (obligatorio) y email (formato válido)
    email: ['admin@test.com', [Validators.required, Validators.email]],
    
    // Campo password con valor por defecto '123456'
    // Validadores: required (obligatorio) y minLength(6) (mínimo 6 caracteres)
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  // Método que se ejecuta cuando el usuario envía el formulario
  onSubmit() {
    // Si el formulario tiene errores de validación (campos vacíos o inválidos)
    // myForm.invalid será true si algún campo no cumple las validaciones
    if (this.myForm.invalid) return; // Sale de la función sin hacer nada

    // Desestructuración: Extrae los valores email y password de myForm.value
    // myForm.value es un objeto que contiene {email: 'valor', password: 'valor'}
    const { email, password } = this.myForm.value;
    
    // ! indica que email y password no son null
    // Llama al metodo login del servicio pasando las credenciales
    const isSuccess = this.authService.login(email!, password!);

    // Evalua el resultado del login
    if (isSuccess) {
      // Si el login es exitoso (retorna true) redirige al usuario a /admin
      this.router.navigate(['/admin']);
    } else {
      // Si login falla (retorna false) muestra error en la plantilla
      this.loginError = true;
    }
  }
}