import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyPlanComponent } from './family-plan.component';

describe('FamilyPlanComponent', () => {
  let component: FamilyPlanComponent;
  let fixture: ComponentFixture<FamilyPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
