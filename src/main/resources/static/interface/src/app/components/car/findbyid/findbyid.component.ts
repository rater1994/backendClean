import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import {ActivatedRoute} from '@angular/router'; 

@Component({
  selector: 'app-findbyid',
  templateUrl: './findbyid.component.html',
  styleUrls: ['./findbyid.component.css']
})
export class FindbyidComponent implements OnInit {
  public carId;

  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ]
  

  
  constructor(private carService:CarService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.getCarId(this.route.snapshot.params.id);
  }



  getCarId(id:number){
    this.carService.getCarId(id).subscribe(
      data =>{this.carId = data;
      },
      err => console.log(err),
    );
  }



}
