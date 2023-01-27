import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  public imagen1:string='/assets/JavaScript-logo.png';
  public imagen2:string='/assets/css-new-logo.jpg';
  public imagen3:string='/assets/html.jpeg';
  public imagen4:string='/assets/typescript-logo.svg';
  public imagen5:string='/assets/angularlogo3.jpeg'

  constructor(){}

  ngOnInit(): void {
    
  }
}
