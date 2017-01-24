import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  @Output() newUserSender = new EventEmitter();

  submitForm(name: string, age: number, gender: string) {
    var newUserToAdd: User = new User(name, age, gender);
    this.newUserSender.emit(newUserToAdd);
  }
}
