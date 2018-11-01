package com.server.car.Entity;
import com.server.car.Entity.dto.CarDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter @NoArgsConstructor
@Entity
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "Model")
    private String mark;

    @Column(name = "Number")
    private String numberRegister;

    @Column(name = "Transmission")
    private String transmissionType;

    @Column(name = "Combustible")
    private String combustibleType;

    @Column
    private String carPrice;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMark() {
        return mark;
    }

    public void setMark(String mark) {
        this.mark = mark;
    }

    public String getNumberRegister() {
        return numberRegister;
    }

    public void setNumberRegister(String numberRegister) {
        this.numberRegister = numberRegister;
    }

    public String getTransmissionType() {
        return transmissionType;
    }

    public void setTransmissionType(String transmissionType) {
        this.transmissionType = transmissionType;
    }

    public String getCombustibleType() {
        return combustibleType;
    }

    public void setCombustibleType(String combustibleType) {
        this.combustibleType = combustibleType;
    }

    public String getCarPrice() {
        return carPrice;
    }

    public void setCarPrice(String carPrice) {
        this.carPrice = carPrice;
    }

    public CarDto toCarDto(){

        CarDto carDto = new CarDto();
        carDto.setCombustibleType(this.combustibleType);
        carDto.setTransmissionType(this.transmissionType);
        carDto.setId(this.id);
        carDto.setMark(this.mark);
        carDto.setNumberRegister(this.numberRegister);
        carDto.setCarPrice(this.carPrice);
        return carDto;
    }

    public void update(CarDto dto){
        this.carPrice=dto.getCarPrice();
        this.combustibleType=dto.getCombustibleType();
        this.id=dto.getId();
        this.mark=dto.getMark();
        this.numberRegister=dto.getNumberRegister();
        this.transmissionType=dto.getTransmissionType();
    }



}
