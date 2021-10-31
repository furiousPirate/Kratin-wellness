import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
;
import { HomeComponent } from './home/home.component';
import { WellnessComponent } from './wellness/wellness.component';
import { BmiComponent } from './bmi/bmi.component';
import { DietComponent } from './diet/diet.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ContentComponent } from './content/content.component';
import { CalbmiComponent } from './calbmi/calbmi.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    WellnessComponent,
    BmiComponent,
    DietComponent,
    ExerciseComponent,
    ContentComponent,
    CalbmiComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
