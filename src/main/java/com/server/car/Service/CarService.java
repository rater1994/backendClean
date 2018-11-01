package com.server.car.Service;

import com.server.car.Entity.Car;
import com.server.car.Entity.dto.CarDto;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Service
public interface CarService {

    List<CarDto> getAllCarsDTO();

    CarDto addCarDTO(@RequestBody CarDto carDto);

    CarDto editCarDTO(@RequestBody CarDto carDto, @PathVariable Long id);

    CarDto findById(@PathVariable Long id);

    void deleteCarDTO(@PathVariable Long id) throws RuntimeException;

}
