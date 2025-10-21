import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empleado } from '../../empleado';
import { EmpleadoService } from '../../service/empleado-service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-anadir-empleado',
    imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule,
        MatSnackBarModule, RouterModule],
    templateUrl: './anadir-empleado.component.html',
    styleUrl: './anadir-empleado.component.css'
})
export class AnadirEmpleadoComponent implements OnInit {

  nombre: string = '';
  apellido: string = '';
  email: string = '';

  id: number | null = null;
  esModoEdicion: boolean = false;

  constructor(
    private route: ActivatedRoute, // <-- Para leer la URL
    private router: Router, // <-- Para navegar de regreso 
    private empleadoService: EmpleadoService,
    private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.esModoEdicion = true;
      this.id = +idParam;

      this.empleadoService.getEmpleadoById(this.id).subscribe(
        data => {
          this.nombre = data.nombre;
          this.apellido = data.apellido;
          this.email = data.email;
        },
        err => {
          this.snackBar.open('ERROR AL CARGAR EL EMPLEADO:' + err, 'Cerrar', { duration: 4000 });
          this.router.navigate(['/empleados']);
        }
      )
    }
  }

  anadirEmpleado() {

    const empleado = new Empleado(
      this.id,
      this.nombre,
      this.apellido,
      this.email
    );
    if (this.esModoEdicion && this.id !== null) {
      this.empleadoService.actualizarEmpleado(this.id, empleado).subscribe(
        res => {
          this.snackBar.open('Empleado actualizado con éxito', 'Cerrar', { duration: 3000 });
          this.router.navigate(['/empleados']);
        }
      )
    }

    else {
      this.empleadoService.save(empleado).subscribe(
        res => {
          console.log("Empleado creado con éxito" + res);
          this.snackBar.open('Empleado creado con éxito', 'Cerrar', { duration: 3000 });
        },
        err => {
          // AÑADE ESTO
          console.error(err); // <-- Imprime el error en la consola
          this.snackBar.open('ERROR:' + err, 'Cerrar', { duration: 4000 });
        }
      );
    }
  }
}
