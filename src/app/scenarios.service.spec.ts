/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScenariosService } from './scenarios.service';

describe('ScenariosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScenariosService]
    });
  });

  it('should ...', inject([ScenariosService], (service: ScenariosService) => {
    expect(service).toBeTruthy();
  }));
});
