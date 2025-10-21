package com.francisco.api.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.francisco.api.entity.Empleado;
import com.francisco.api.service.EmpleadoService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping("/api/empleados")
public class EmpleadoController {

    private final EmpleadoService empleadoService;

    public EmpleadoController(EmpleadoService empleadoService) {
        this.empleadoService = empleadoService;
    }

    @PostMapping
    public Empleado save(@RequestBody Empleado empleado) {
        return empleadoService.save(empleado);
    }

    @GetMapping
    public List<Empleado> findAll(){
        return empleadoService.findAll();
    }

    @GetMapping("/{id}")
    public Empleado findById(@PathVariable Integer id){
        return empleadoService.findById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Integer id){
        empleadoService.deleteById(id);
    }
    @PutMapping("/{id}")
    public Empleado updateEmpleado(
    @PathVariable Integer id,    
    @RequestBody Empleado empleado){

        Empleado empleadoDB = empleadoService.findById(empleado.getId());
        
        empleadoDB.setNombre(empleado.getNombre());
        empleadoDB.setApellido(empleado.getApellido());
        empleadoDB.setEmail(empleado.getEmail());

        return empleadoService.update(empleadoDB);
    }

}
