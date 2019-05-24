import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSectionComponent } from './store-section.component';

describe('StoreSectionComponent', () => {
  let component: StoreSectionComponent;
  let fixture: ComponentFixture<StoreSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
