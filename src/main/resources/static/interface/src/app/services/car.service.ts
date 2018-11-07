import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpoptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }

  getAllCars(){
    return this.http.get('server/api/car/list')
  }

  addNewCar(car){
    let body = JSON.stringify(car);
    return this.http.post('server/api/car/add',body,httpoptions)
  }

  getCarId(id:number){
    return this.http.get('server/api/car/find/' + id)
  }

  editCar(id:number,car){
    let body = JSON.stringify(car);
    return this.http.put('server/api/car/edit/' + id,  body, httpoptions);
  }

  testEditCar( id:number,car){
    let body = JSON.stringify(car);
    return this.http.put('server/api/car/edit/' + id, body, httpoptions,);
  
  }


}
