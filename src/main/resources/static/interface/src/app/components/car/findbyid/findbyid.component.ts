import { CarlistComponent } from './../carlist/carlist.component';
import { CarService } from './../../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'; 
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { FormGroup,FormControl,Validators} from '@angular/forms'
import { Observable } from 'rxjs';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-findbyid',
  templateUrl: './findbyid.component.html',
  styleUrls: ['./findbyid.component.css']
})
export class FindbyidComponent implements OnInit {
  public carId ;

  editMessage:string = "Car edited"
  validMessage:string;
  carEdit:FormGroup;
  transmissionType: string[] = ['Manual', 'Auto'];
  combustibleType: string[] = ['Diesel','Benzin'];

  
  constructor(private carService:CarService,
              private route:ActivatedRoute) { }
 
  ngOnInit() {
    this.getCarId(this.route.snapshot.params.id);
    this.carEdit = new FormGroup({
      mark: new FormControl (),
      numberRegister: new FormControl (),
      transmissionType : new FormControl (),
      combustibleType: new FormControl(),
      carPrice: new FormControl ()

    });
  }
  getCarId(id:number){
    this.carService.getCarId(id).subscribe(
      data =>{this.carId = data;
      },
      err => console.log(err),
    );
  }
    editedCar(){
      if(this.carEdit.valid){
       let id:number;
        this.validMessage = "Car edited with id: "+ this.carId.id;
        this.carService.testEditCar(this.carId.id,this.carEdit.value).subscribe(
          data =>{this.carEdit.updateOn
          return true;
        },
        error => {return Observable.throw(error);
        })
      }else{
        this.validMessage = "Fill out the form before submit!";
      }
    }
  }
    
    
    
  
  
  
  
  