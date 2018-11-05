import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindbyidComponent } from './components/car/findbyid/findbyid.component';
import { HomeComponent } from './components/home/home.component';
import { combineLatest } from 'rxjs';
import { CarlistComponent } from './components/car/carlist/carlist.component';
import { AddnewcarComponent } from './components/car/addnewcar/addnewcar.component';

const routes: Routes = [
{path: '', component:HomeComponent}, 
{path: 'car/list', component:CarlistComponent},
{path: 'car/add',component:AddnewcarComponent},
{path:'getcar/:id', component:FindbyidComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
