import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // dark side
  darkSide(){
    return this.http.get('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/21.json')
  }
  darkSide1(){
    return this.http.get('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/4.json')
  }
  darkSide2(){
    return this.http.get('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/67.json')
  }
  darkSide3(){
    return this.http.get('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/44.json')
  }

  // light side
  lightSide(){
    return this.http.get('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/1.json')
  }
  lightSide1(){
    return this.http.get('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/10.json')
  }
  lightSide2(){
    return this.http.get('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/20.json')
  }
  lightSide3(){
    return this.http.get('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/32.json')
  }
}
