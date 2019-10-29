import { async, TestBed } from '@angular/core/testing';
import { DashboardUiModule } from './dashboard-ui.module';

describe('DashboardUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DashboardUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DashboardUiModule).toBeDefined();
  });
});
