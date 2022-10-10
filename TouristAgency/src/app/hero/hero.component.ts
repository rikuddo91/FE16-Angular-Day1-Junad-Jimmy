import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  title : string = "Winter is coming !";
  paragraph : string = "Jingle bells ! Jingle bells! Jingle all the way! It is time to book your winter holiday!";
  btn : string = "Learn more";
  btnUrl : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
