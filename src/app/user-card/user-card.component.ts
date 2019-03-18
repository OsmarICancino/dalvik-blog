import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  public name: string;
  public username: string;
  public avatar: string;

  constructor() { }

  ngOnInit() {
    this.username = 'Osmar_ICancino';
    this.name = 'Osmar I. Cancino Díaz';
    this.avatar = 'https://cdn.dribbble.com/users/1430614/screenshots/5926312/image.png';
  }

  changing(event: any) {
    this.username = event.target.value;
  }

}
