import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-calbmi',
  templateUrl: './calbmi.component.html',
  styleUrls: ['./calbmi.component.css']
})
export class CalbmiComponent implements OnInit {
  public weight: number = 0;
  public height: number = 0;
  public bmi: number = 0;
  public calHeight: number = 0;
  constructor(private router : ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      console.log(params);
      this.height = params.height;
      this.weight = params.weight;
      this.calHeight = this.height*this.height;
      this.bmi = this.weight/this.calHeight; 
    });
  }

}
