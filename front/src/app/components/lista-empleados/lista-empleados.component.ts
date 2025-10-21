import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../empleado';
import { EmpleadoService } from '../../service/empleado-service';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
    imports: [RouterModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule
    ],
    selector: 'app-lista-empleados',
    templateUrl: './lista-empleados.component.html',
    styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent implements OnInit{

  empleados : Empleado[] = [];

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email', 'acciones'];

  constructor(private empleadoService : EmpleadoService , private snackBar : MatSnackBar){}

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(){
    this.empleadoService.getEmpleados().subscribe(
      data => {
        this.empleados = data;
        console.log(this.empleados);
      }
    );
  }

  deleteEmpleado(id : number){
    this.snackBar.open('Se elimino el empleado con id' + id , 'Eliminar', { duration: 4000 });    
    this.empleadoService.deleteEmpleado(id).subscribe(
      () => this.getEmpleados()
    );
  }
}
