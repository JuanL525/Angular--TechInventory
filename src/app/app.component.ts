// Importa el decorador Component desde Angular core para crear componentes
import { Component } from '@angular/core';

// Importa RouterOutlet que es un componente que actúa como marcador de posición para rutas
import { RouterOutlet } from '@angular/router';

// Decorador @Component que convierte la clase AppComponent en un componente Angular
@Component({
  // selector: Define la etiqueta HTML personalizada para usar este componente
  selector: 'app-root',
  
  // standalone: true. Componente independiente que no necesita ser declarado en un módulo
  standalone: true,
  
  // imports: Lista de componentes/directivas que este componente necesita para funcionar
  // RouterOutlet es importante es donde Angular insertará los componentes de las rutas
  imports: [RouterOutlet],
  
  // templateUrl: Ruta al archivo HTML que contiene la plantilla (vista) de este componente
  templateUrl: './app.html',
  
  // styleUrl: Ruta al archivo CSS con estilos específicos para este componente
  styleUrl: './app.css'
})

// Define y exporta la clase AppComponent
// Esta es la clase raiz principal de toda la aplicación Angular
export class AppComponent {
  // Propiedad publica 'title' con valor inicial 'tech-inventory'
  title = 'tech-inventory';
}