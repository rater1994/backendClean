import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addnewcar',
  templateUrl: './addnewcar.component.html',
  styleUrls: ['./addnewcar.component.css']
})
export class AddnewcarComponent implements OnInit {
  carForm:FormGroup;
  validMessage:string = "";
  transmissionType: string[] = ['Manual', 'Auto'];
  combustibleType: string[] = ['Diesel','Benzin'];


  constructor(private carService:CarService) { }

  ngOnInit() {
    this.carForm = new FormGroup({
      mark: new FormControl ('', Validators.required),
      numberRegister: new FormControl ('',Validators.required),
      transmissionType : new FormControl ('',Validators.required),
      combustibleType: new FormControl('',Validators.required),
      carPrice: new FormControl ('', Validators.required)
    });
  }

  submitAddedCar(){
    if(this.carForm.valid){
      this.validMessage = "Car added!";
      this.carService.addNewCar(this.carForm.value).subscribe(
        data =>{this.carForm.reset();
        return true;
      },
      error => {return Observable.throw(error);
      }
      )
    }else{
      this.validMessage = "Fill out the form before submit!";
    }
  }
}
