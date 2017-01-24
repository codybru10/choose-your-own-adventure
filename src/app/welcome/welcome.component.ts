import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';
import { Scenarios } from '../scenarios.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  @Output() newUserSender = new EventEmitter();

  user = null;

  constructor(private router: Router){}

  submitForm(name: string, age: number, gender: string) {
    this.user = new User(name, age, gender);
    console.log(this.user.name);
  }

  scenarios: Scenarios[] = [
    new Scenarios("You get to the theater and notify the theater staff that someone is going to attempt to assassinate Lincoln but risk them not taking you seriously.", 1),
    new Scenarios("You get into the theater and try to stop Booth yourself but you run the risk of not stopping the assassination from happening.", 2)
  ];

  goToDetailPage(clickedScenario: Scenarios) {
    console.log(clickedScenario);
    this.router.navigate(['scenarios', clickedScenario.id]);
  };
}
