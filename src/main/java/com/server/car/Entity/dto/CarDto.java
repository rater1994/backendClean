package com.server.car.Entity.dto;

import javax.persistence.Column;

public class CarDto {
    private Long id;
    private String mark;
    private String numberRegister;
    private String transmissionType;
    private String combustibleType;
    private String carPrice;

    public String getCarPrice() {
        return carPrice;
    }

    public void setCarPrice(String carPrice) {
        this.carPrice = carPrice;
    }

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
}
