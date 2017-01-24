import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Scenarios } from '../scenarios.model';

@Component({
  selector: 'app-scenario-detail',
  templateUrl: './scenario-detail.component.html',
  styleUrls: ['./scenario-detail.component.css']
})
export class ScenarioDetailComponent implements OnInit {
  scenarioId: number = null;
  constructor() { }

  ngOnInit() {
    // this.route.params.forEach((urlParametersArray) => {
    //   this.scenarioId = parseInt(urlParametersArray['id']);
    // });  
  }

}
