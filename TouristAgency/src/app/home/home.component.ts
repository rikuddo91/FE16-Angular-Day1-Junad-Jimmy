import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
}) 

export class HomeComponent implements OnInit {
  why:string ="Why are we the best";
  arrayDestinations : Array <any> = ["French Alps", "Swiss Alps", "Tyrol"];
  arrayUrl : Array<any> = ["https://cdn.pixabay.com/photo/2015/04/16/22/21/courchevel-726325__480.jpg","https://cdn.pixabay.com/photo/2018/03/26/23/53/salzburg-3264597__480.jpg","https://cdn.pixabay.com/photo/2015/02/22/19/28/mountains-645403__480.jpg"]
  
  constructor(){}
  ngOnInit(): void {
  
}}

