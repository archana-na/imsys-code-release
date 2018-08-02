import { TestBed, inject } from '@angular/core/testing';

import { RestdataService } from './restdata.service';

describe('RestdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestdataService]
    });
  });

  it('should be created', inject([RestdataService], (service: RestdataService) => {
    expect(service).toBeTruthy();
  }));
});
