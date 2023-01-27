import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  public titulo:string = '';
  public imagen:string ='src/assets/2.png';
  constructor(){}

  ngOnInit(): void {
    
  }
}
