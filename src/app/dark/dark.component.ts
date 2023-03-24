import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dark',
  templateUrl: './dark.component.html',
  styleUrls: ['./dark.component.css']
})
export class DarkComponent implements OnInit{
  darkSide:any = {};
  darkSide1:any = {};
  darkSide2:any = {};
  darkSide3:any = {};
  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getDarkSide()
    this.getDarkSide1()
    this.getDarkSide2()
    this.getDarkSide3()
  }

  getDarkSide(){
    this.api.darkSide()
    .subscribe((result:any)=>{
      console.log(result);
      this.darkSide = result
    })
  }
  getDarkSide1(){
    this.api.darkSide1()
    .subscribe((result:any)=>{
      console.log(result);
      this.darkSide1 = result
    })
  }
  getDarkSide2(){
    this.api.darkSide2()
    .subscribe((result:any)=>{
      console.log(result);
      this.darkSide2 = result
    })
  }
  getDarkSide3(){
    this.api.darkSide3()
    .subscribe((result:any)=>{
      console.log(result);
      this.darkSide3 = result
    })
  }
}
