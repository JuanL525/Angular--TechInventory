// Importa tipos y funciones para Server-Side Rendering (SSR) desde Angular (Renderizar la aplicacion en el servidor antes del navegador)
import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';

// Importa el componente raiz de la aplicacion (AppComponent)
import { AppComponent } from './app/app.component';

// Importa la configuracion especifica para el servidor (SSR)
import { config } from './app/app.config.server';

// Define y exporta una funcion de bootstrap para SSR
// Esta función sera llamada por el servidor Node.js para renderizar la app Angular
const bootstrap = (context: BootstrapContext) =>
    // bootstrapApplication: Funcion que inicia la aplicacion Angular
    // Le pasa 3 parametros: componente raiz, configuracion, y contexto del servidor
    bootstrapApplication(AppComponent, config, context); //(context hace que a partir del usuario, se muestre el renderizado especifico para el)

export default bootstrap;