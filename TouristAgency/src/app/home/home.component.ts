import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  why:string ="Why are we the best";
  constructor() {

   }

  ngOnInit(): void {
  }

}
//let arrayDestinations : Array <any> = [];

/* class destinations{
  place : string;
  url : string;

  constructor(place:string, url:string){
    this.place = place;
    this.url = url;

    arrayDestinations.push(this);
  }
  
}; */

/* let place1 = new destinations ("french Alps", "");
let place2 = new destinations ("swiss Alps", "");
let place3 = new destinations ("Tyrol", "");
let place4 = new destinations ("Pyreneans", "");
let place5 = new destinations ("Slowakian Tatras", "");
let place6 = new destinations ("Norway", "");

for (let items of arrayDestinations){
  let cardHolder : any = document.getElementById("card-holder");
  cardHolder.innerHTML += `
  <div class="col-4"><div class="card" style="width: 18rem;">
        <img src="${items.url}" class="card-img-top" alt="${items.url}">
        <div class="card-body">
          <h5 class="card-title">${items.place}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div></div>`
} */