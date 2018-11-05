import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {

  public cars;
  constructor(private carService:CarService) { }

  ngOnInit() {
    this.getAllCars();
  }

  getAllCars(){
    this.carService.getAllCars().subscribe(
    data => {this.cars = data},
    err => console.log(err),
    () => console.log("Car loaded")
    );}
    
}
