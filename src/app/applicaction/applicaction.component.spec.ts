import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicactionComponent } from './applicaction.component';

describe('ApplicactionComponent', () => {
  let component: ApplicactionComponent;
  let fixture: ComponentFixture<ApplicactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
