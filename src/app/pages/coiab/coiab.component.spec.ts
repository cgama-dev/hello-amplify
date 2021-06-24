import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoiabComponent } from './coiab.component';

describe('CoiabComponent', () => {
  let component: CoiabComponent;
  let fixture: ComponentFixture<CoiabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoiabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoiabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
