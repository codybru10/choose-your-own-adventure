import { Injectable } from '@angular/core';
import { Scenarios } from './scenarios.model';
import { SCENARIOS } from './mock-scenarios';

@Injectable()
export class ScenariosService {

  constructor() { }

  getScenarios() {
    return SCENARIOS;
  }

  getScenarioById(scenarioId: number){
    for (var i = 0; i <= SCENARIOS.length - 1; i++) {
      if (SCENARIOS[i].id == scenarioId) {
        return SCENARIOS[i];
      }
    }
  }

}
