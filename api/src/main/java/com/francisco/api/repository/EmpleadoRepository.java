package com.francisco.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.francisco.api.entity.Empleado;

@Repository
public interface EmpleadoRepository extends JpaRepository<Empleado, Integer>{


}
