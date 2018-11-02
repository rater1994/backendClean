import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindbyidComponent } from './components/car/findbyid/findbyid.component';

const routes: Routes = [
{path:'getcar/:id', component:FindbyidComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
