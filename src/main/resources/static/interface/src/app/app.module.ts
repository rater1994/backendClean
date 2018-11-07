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
import { HomeComponent } from './components/home/home.component';
import { FilterPipe } from './filter.pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CarlistComponent,
    AddnewcarComponent,
    FindbyidComponent,
    NavbarComponent,
    HomeComponent,
    FilterPipe,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AngularFontAwesomeModule,
    
  

  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
