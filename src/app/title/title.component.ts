import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-title",
  templateUrl: 'title.component.html',
  styleUrls : ['title.component.css']
})

export class TitleComponent implements OnInit{

  public name : string;
  public edad : number;
  public edades : number[];
  public isAvailable : boolean = true;
  public css_class : string[] = ['active', 'shadow'];

  ngOnInit() {
    this.name = "Osmar Cancino";
    this.edad = 23;

    setTimeout(() => this.name = "Maricela :3", 3000)
    setTimeout(() => this.isAvailable = false, 3000)

  }


  getEdadNombre() : string {
    return `${this.name} : ${this.edad}`;
  }
}
