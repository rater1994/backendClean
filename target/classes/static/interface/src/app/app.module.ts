import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarlistComponent } from './components/car/carlist/carlist.component';
import { CarService } from './services/car.service';
import { AddnewcarComponent } from './components/car/addnewcar/addnewcar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FindbyidComponent } from './components/car/findbyid/findbyid.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CarlistComponent,
    AddnewcarComponent,
    FindbyidComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
