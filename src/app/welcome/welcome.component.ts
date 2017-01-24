import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  @Output() newUserSender = new EventEmitter();

  user = null;

  submitForm(name: string, age: number, gender: string) {
    this.user = new User(name, age, gender);
    console.log(this.user.name);
  }
}
