package com.francisco.crud_fullstack_angular.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.francisco.crud_fullstack_angular.entity.Empleado;
import com.francisco.crud_fullstack_angular.exception.ResourceNotFoundException;
import com.francisco.crud_fullstack_angular.repository.EmpleadoRepository;

@Service
public class EmpleadoServiceImpl implements EmpleadoService {

    private final EmpleadoRepository empleadoRepository;
    
    public EmpleadoServiceImpl(EmpleadoRepository empleadoRepository) {
        this.empleadoRepository = empleadoRepository;
    }

    @Override
    public Empleado save(Empleado empleado) {
        return empleadoRepository.save(empleado);
    }

    @Override
    public List<Empleado> findAll() {
        return empleadoRepository.findAll();
    }

    @Override
    public Empleado findById(Integer id) {
        Empleado empleado = empleadoRepository.findById(id).orElseThrow(
            () ->{
                throw new ResourceNotFoundException("Empleado con id " + id + " no se encuentra");
            }
        );
        return empleado;
    }

    @Override
    public void deleteById(Integer id) {
        this.empleadoRepository.deleteById(id);
    }

     @Override
     public Empleado update(Empleado empleado) {
        return this.empleadoRepository.save(empleado);
     }


}
