import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})

export class LightComponent implements OnInit{
  lightSide:any = {};
  lightSide1:any = {};
  lightSide2:any = {};
  lightSide3:any = {};
  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getLightSide()
    this.getLightSide1()
    this.getLightSide2()
    this.getLightSide3()
  }

  getLightSide(){
    this.api.lightSide()
    .subscribe((result:any)=>{
      console.log(result);
      this.lightSide = result
    })
  }
  getLightSide1(){
    this.api.lightSide1()
    .subscribe((result:any)=>{
      console.log(result);
      this.lightSide1 = result
    })
  }
  getLightSide2(){
    this.api.lightSide2()
    .subscribe((result:any)=>{
      console.log(result);
      this.lightSide2 = result
    })
  }
  getLightSide3(){
    this.api.lightSide3()
    .subscribe((result:any)=>{
      console.log(result);
      this.lightSide3 = result
    })
  }
}
