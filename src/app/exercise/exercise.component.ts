import { Component, OnInit } from '@angular/core';
import exerciseJson from './exercise.model';
@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  accordianDetails:any=[]
  constructor() { }

  ngOnInit(): void {
    this.accordianDetails=exerciseJson;
  }

}
