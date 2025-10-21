package com.francisco.api.service;

import com.francisco.api.entity.Empleado;

import java.util.List;

public interface EmpleadoService {

    Empleado save(Empleado empleado);
    List<Empleado> findAll();
    Empleado findById(Integer id);
    void deleteById(Integer id);
    Empleado update(Empleado empleado);

}
