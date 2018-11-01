package com.server.car.Controller;


import com.server.car.Entity.Car;
import com.server.car.Entity.dto.CarDto;
import com.server.car.Repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;
import sun.rmi.transport.proxy.HttpReceiveSocket;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/car")
public interface CarController {

    @GetMapping("/list")
    List<CarDto> getAllCars();

    @PostMapping("add")
    ResponseEntity addCar(@RequestBody CarDto carDto);

    @PutMapping("/edit/{id}")
    ResponseEntity editCar(@RequestBody CarDto carDto, @PathVariable Long id);

    @DeleteMapping("/delete/{id}")
    ResponseEntity deleteCar(@PathVariable Long id);

    @GetMapping("find/{id}")
    CarDto findCar(@PathVariable Long id);

}
