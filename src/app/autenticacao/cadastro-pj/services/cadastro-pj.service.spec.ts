import { TestBed } from '@angular/core/testing';

import { CadastroPjService } from './cadastro-pj.service';

describe('CadastroPjService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastroPjService = TestBed.get(CadastroPjService);
    expect(service).toBeTruthy();
  });
});
