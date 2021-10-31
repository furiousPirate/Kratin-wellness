import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WellnessComponent } from './wellness/wellness.component';
import { BmiComponent } from './bmi/bmi.component';
import { DietComponent } from './diet/diet.component';
import { ExerciseComponent } from './exercise/exercise.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CalbmiComponent } from './calbmi/calbmi.component';

const routes: Routes = [
  {path:"",  component:HomeComponent},
  {path:"home",  component:HomeComponent},
  {path:"wellness",component:WellnessComponent},
  {path:"bmi",component:BmiComponent},
  {path:"diet", component:DietComponent},
  {path:"exercise", component:ExerciseComponent},
  {path:"calbmi",component:CalbmiComponent}
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes),FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
