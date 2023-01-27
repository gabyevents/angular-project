import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  public imagen1:string='/assets/cod1.jpg';
  public imagen2:string='/assets/cod2.jpg';
  public imagen3:string='/assets/java.jpg';
  public imagen4:string='/assets/astrac.jpg';
  public imagen5:string='/assets/gabyfoto.jpg'

  

  constructor(){}

  ngOnInit(): void {
    
  }
}
