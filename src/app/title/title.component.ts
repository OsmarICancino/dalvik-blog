import { Component, OnInit } from '@angular/core';

@Component({
  selector: "title",
  templateUrl: 'title.component.html',
  styleUrls : ['title.component.css']
})

export class TitleComponent implements OnInit{

  public name : string;
  public edad : number;
  public edades : number[];

  ngOnInit() {
    this.name = "Osmar Cancino";
    this.edad = 23;
  }


  getEdadNombre() : string {
    return `${this.name} : ${this.edad}`;
  }
}
