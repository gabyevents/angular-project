import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public imagen2:string = '/assets/2.svg';

  constructor() {}

  ngOnInit(): void {
  }
}
