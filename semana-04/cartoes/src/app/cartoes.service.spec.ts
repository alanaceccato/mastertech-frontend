import { TestBed, inject } from '@angular/core/testing';

import { CartoesService } from './cartoes.service';

describe('CartoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartoesService]
    });
  });

  it('should be created', inject([CartoesService], (service: CartoesService) => {
    expect(service).toBeTruthy();
  }));
});
