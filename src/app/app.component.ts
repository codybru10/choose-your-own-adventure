import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Time Travel Adventures';

  masterUserList: User[] = [
  ];

  addUser(user){
    this.masterUserList.push(user);
  }
}
