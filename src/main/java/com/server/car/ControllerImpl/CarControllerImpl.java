package com.server.car.ControllerImpl;

import com.server.car.Controller.CarController;
import com.server.car.Entity.Car;
import com.server.car.Entity.dto.CarDto;
import com.server.car.Repository.CarRepository;
import com.server.car.Service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.List;

@RestController
public class CarControllerImpl implements CarController {

   @Autowired
   private CarService carService;

   @Autowired
   private CarRepository carRepository;

    public CarControllerImpl(CarService carService, CarRepository carRepository) {
        this.carService = carService;
        this.carRepository = carRepository;
    }

    @Override
    public List<CarDto> getAllCars() {
        return carService.getAllCarsDTO();
    }

    @Override
    public ResponseEntity addCar(@RequestBody CarDto carDto) {
       carService.addCarDTO(carDto);
       return ResponseEntity.ok(carDto);
    }

    @Override
    public ResponseEntity editCar(@RequestBody CarDto carDto,@PathVariable Long id) {
        final CarDto returnCarDTO = carService.editCarDTO(carDto, id);
        if(returnCarDTO == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(returnCarDTO);
    }

    @Override
    public ResponseEntity deleteCar(@PathVariable Long id) {
        try {
            carService.deleteCarDTO(id);
        }catch (RuntimeException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return  ResponseEntity.ok().build(); //<- -> message: return  ResponseEntity.ok("The id: "+ id + " deleted!");
    }

    @Override
    public CarDto findCar(@PathVariable Long id) {
        return carService.findById(id);
    }
}
