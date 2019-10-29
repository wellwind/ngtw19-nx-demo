import { TestBed } from '@angular/core/testing';

import { TodoDataAccessService } from './todo-data-access.service';

describe('TodoDataAccessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoDataAccessService = TestBed.get(TodoDataAccessService);
    expect(service).toBeTruthy();
  });
});
