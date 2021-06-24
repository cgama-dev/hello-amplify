import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoboxPovosComponent } from './infobox-povos.component';

describe('InfoboxPovosComponent', () => {
  let component: InfoboxPovosComponent;
  let fixture: ComponentFixture<InfoboxPovosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoboxPovosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoboxPovosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
