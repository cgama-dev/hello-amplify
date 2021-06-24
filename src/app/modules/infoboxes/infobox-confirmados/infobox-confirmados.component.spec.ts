import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoboxConfirmadosComponent } from './infobox-confirmados.component';

describe('InfoboxConfirmadosComponent', () => {
  let component: InfoboxConfirmadosComponent;
  let fixture: ComponentFixture<InfoboxConfirmadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoboxConfirmadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoboxConfirmadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
