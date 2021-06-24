import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DseiComponent } from './dsei.component';

describe('DseiComponent', () => {
  let component: DseiComponent;
  let fixture: ComponentFixture<DseiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DseiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DseiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
