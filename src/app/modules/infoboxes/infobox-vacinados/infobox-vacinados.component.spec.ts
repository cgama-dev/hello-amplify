import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoboxVacinadosComponent } from './infobox-vacinados.component';

describe('InfoboxVacinadosComponent', () => {
  let component: InfoboxVacinadosComponent;
  let fixture: ComponentFixture<InfoboxVacinadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoboxVacinadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoboxVacinadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
