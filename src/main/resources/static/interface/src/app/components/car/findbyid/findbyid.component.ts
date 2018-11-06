import { CarlistComponent } from './../carlist/carlist.component';
import { CarService } from './../../../services/car.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; 
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-findbyid',
  templateUrl: './findbyid.component.html',
  styleUrls: ['./findbyid.component.css']
})
export class FindbyidComponent implements OnInit {
  public carId;
  editMessage:string = "Car edited"

  carEdit:FormGroup;
  
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
