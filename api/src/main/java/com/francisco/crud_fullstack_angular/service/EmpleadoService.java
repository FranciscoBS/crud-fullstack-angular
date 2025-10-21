package com.francisco.crud_fullstack_angular.service;

import com.francisco.crud_fullstack_angular.entity.Empleado;

import java.util.List;

public interface EmpleadoService {

    Empleado save(Empleado empleado);
    List<Empleado> findAll();
    Empleado findById(Integer id);
    void deleteById(Integer id);
    Empleado update(Empleado empleado);

}
