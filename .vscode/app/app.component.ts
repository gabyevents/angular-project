import { Component, OnInit } from '@angular/core';

interface targetas{
  titulo:string;
  subtitulo:string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  public ArregloTargetas: targetas[]=[];
  title = 'GabCode';

  constructor() {}

  ngOnInit(): void {
    this.ArregloTargetas =[
      {titulo:'Video 1', subtitulo:'subtitulo video 1'},
      {titulo:'Video 2', subtitulo:'subtitulo video 2'},
      {titulo:'Video 3', subtitulo:'subtitulo video 3'},
     
    ]
  }


}
