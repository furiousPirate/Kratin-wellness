import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() accordianTitle:string="";
@Input() accordianDescription:string="";
@Input() accordianId:string="";
isCollapsed:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleAccordian(){
    if(this.isCollapsed){
      this.isCollapsed=false;
    }
    else{
      this.isCollapsed=true;
    }
  }
}
