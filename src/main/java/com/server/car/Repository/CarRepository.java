package com.server.car.Repository;

import com.server.car.Entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//Get JPA

@Repository
public interface CarRepository extends JpaRepository<Car,Long> {

}
