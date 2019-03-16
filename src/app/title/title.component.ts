import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: "app-title",
  templateUrl: 'title.component.html',
  styleUrls : ['title.component.css']
})

export class TitleComponent implements OnInit{

  public name : string;
  public isAvailable : boolean = true;
  public moreInformation : boolean = false;
  public topics : string[];
  public category : string;

  ngOnInit() {
    this.name = "Osmar Cancino";
    this.topics = [
      "Domotica",
      "Arduino",
      "Android Development",
      "iOS Development"
    ];
    this.category = "mobile";
  }

  toogleMoreInformation() {
    this.moreInformation = !this.moreInformation;
  }

}
