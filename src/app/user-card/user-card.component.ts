import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  @Output() subscribed = new EventEmitter<boolean>();

  ngOnInit() {
    this.username = 'Osmar_ICancino';
    this.name = 'Osmar I. Cancino Díaz';
    this.avatar = 'https://cdn.dribbble.com/users/1430614/screenshots/5926312/image.png';

    setTimeout(() => this.subscribed.emit(true), 3000);
  }

  changing(event: any) {
    this.username = event.target.value;
  }

}
