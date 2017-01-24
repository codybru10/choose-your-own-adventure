import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Scenarios } from '../scenarios.model';
import { ScenariosService } from '../scenarios.service';

@Component({
  selector: 'app-scenario-detail',
  templateUrl: './scenario-detail.component.html',
  styleUrls: ['./scenario-detail.component.css'],
  providers: [ScenariosService]
})
export class ScenarioDetailComponent implements OnInit {


  scenarioId: number = null;
  scenarioToDisplay: Scenarios;

  constructor(private route: ActivatedRoute, private location: Location, private scenariosService: ScenariosService) { }

  ngOnInit() {
    console.log("yo");
    this.route.params.forEach((urlParametersArray) => {
      this.scenarioId = (urlParametersArray['id']);
    });
    this.scenarioToDisplay = this.scenariosService.getScenarioById(this.scenarioId);
  }

}
