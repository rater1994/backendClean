package com.server.car.ServiceImpl;

import com.server.car.Entity.Car;
import com.server.car.Entity.dto.CarDto;
import com.server.car.Repository.CarRepository;
import com.server.car.Service.CarService;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.xml.ws.Response;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CarServiceImpl implements CarService {

    @Autowired
    private CarRepository carRepository;

    @Override
    public List<CarDto> getAllCarsDTO(){
        List<CarDto> list = new ArrayList<>();
        carRepository.findAll().forEach(car -> {
            list.add(car.toCarDto());
        });
        return list;
    }

    @Override
    public CarDto addCarDTO(CarDto carDTO) {
        Car car = new Car();
        car.update(carDTO);
        return carRepository.save(car).toCarDto();
    }

    @Override
    public CarDto editCarDTO(CarDto carDto, Long id){
        final Optional<Car> dbCar = carRepository.findById(id);

        if(dbCar.isPresent()){
            Car car = dbCar.get();
            car.setCombustibleType(carDto.getCombustibleType());
            car.setTransmissionType(carDto.getTransmissionType());
            car.setCarPrice(carDto.getCarPrice());
            car.setMark(carDto.getMark());
            car.setNumberRegister(carDto.getNumberRegister());
            return carRepository.save(car).toCarDto();
        }
        return null;
    }

    @Override
    public CarDto findById(Long id) {
        if(carRepository.findById(id).isPresent()){
            return carRepository.findById(id).get().toCarDto();
        }
        return  null;
    }

    @Override
    public void deleteCarDTO(Long id) throws RuntimeException {
        try {
            carRepository.deleteById(id);
        }catch (Exception e){
            throw new RuntimeException("Cannot delete car with id: " + id);
        }
    }
}
