// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { AnadirEmpleadoComponent } from './components/anadir-empleado/anadir-empleado.component';

export const routes: Routes = [
    // --- AÑADE ESTA LÍNEA ---
    // Redirige la ruta raíz ('') a la ruta '/empleados'.
    // 'pathMatch: full' es necesario para las redirecciones de la ruta raíz.
    { path: '', redirectTo: 'empleados', pathMatch: 'full' },
    
    // --- Tus rutas existentes ---
    { path: 'empleados', component: ListaEmpleadosComponent },
    { path: 'empleados/anadirEmpleado', component: AnadirEmpleadoComponent },
    { path: 'empleados/editarEmpleado/:id', component: AnadirEmpleadoComponent}
];