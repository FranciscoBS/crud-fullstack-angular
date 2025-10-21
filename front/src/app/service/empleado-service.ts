import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private api : string = "http://localhost:8080/api/empleados" ;
  constructor(private http:HttpClient) { }

  getEmpleados() : Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.api);
  }

  save(empleado: Empleado) : Observable<Empleado>{
    return this.http.post<Empleado>(this.api, empleado);
  }

  deleteEmpleado(id:number) : Observable<any>{
    return this.http.delete(this.api + '/' + id);
  }

  getEmpleadoById(id:number) : Observable<Empleado>{
    return this.http.get<Empleado>(this.api + '/' + id );
  }

  actualizarEmpleado(id:number ,empleado : Empleado) : Observable<Empleado>{
    return this.http.put<Empleado>(this.api + '/' + id , empleado);
  }
}
