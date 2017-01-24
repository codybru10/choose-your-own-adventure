import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Scenarios } from '../scenarios.model';
import { Router } from '@angular/router';
import { ScenariosService } from '../scenarios.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ScenariosService]
})
export class WelcomeComponent implements OnInit {
  @Output() newUserSender = new EventEmitter();

  user = null;

  constructor(private router: Router, private scenariosService: ScenariosService){}

  submitForm(name: string, age: number, gender: string) {
    this.user = new User(name, age, gender);
    console.log(this.user.name);
  }

  scenarios: Scenarios[];

  ngOnInit(){
    this.scenarios = this.scenariosService.getScenarios(); 
  }

  goToDetailPage(clickedScenario: Scenarios) {
    console.log(clickedScenario);
    this.router.navigate(['scenarios', clickedScenario.id]);
  };
}
