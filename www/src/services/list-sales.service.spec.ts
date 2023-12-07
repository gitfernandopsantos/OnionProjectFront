import { TestBed } from '@angular/core/testing';

import { ListSalesService } from './list-sales.service';

describe('ListSalesService', () => {
  let service: ListSalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListSalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
