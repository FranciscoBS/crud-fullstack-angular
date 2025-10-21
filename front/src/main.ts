import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ListaEmpleadosComponent } from './app/components/lista-empleados/lista-empleados.component';
import { AnadirEmpleadoComponent } from './app/components/anadir-empleado/anadir-empleado.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


