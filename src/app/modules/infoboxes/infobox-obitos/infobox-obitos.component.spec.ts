import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoboxObitosComponent } from './infobox-obitos.component';

describe('InfoboxObitosComponent', () => {
  let component: InfoboxObitosComponent;
  let fixture: ComponentFixture<InfoboxObitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoboxObitosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoboxObitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
