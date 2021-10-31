import { Component, OnInit } from '@angular/core';
import dietJson from './diet.model';
@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {

  constructor() { }
  accordianDetails: any = [];
  ngOnInit(): void {
    this.accordianDetails = dietJson;
  }

}
