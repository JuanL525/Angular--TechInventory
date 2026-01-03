import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig) //(Funcion que inicia la aplicacion Angular)
  .catch((err) => console.error(err));
