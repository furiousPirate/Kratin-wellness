import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {
  homeForm=new FormGroup(
    {
      height:new FormControl(),
      weight:new FormControl()
    }
  );
  constructor(private route : Router) { }


  ngOnInit(): void {
  }
  calBmi() {
    let obj :any = this.homeForm.value;
    this.route.navigate(['/calbmi'],{queryParams : obj});
  }

}
