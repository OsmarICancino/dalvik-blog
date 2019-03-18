import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dalvik-blog';

  userSubcribed(ev : any) {
    console.log('El usuaro se subscribio');
    console.log(ev);
  }
}


