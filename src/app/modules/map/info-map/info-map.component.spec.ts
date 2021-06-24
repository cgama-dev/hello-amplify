import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModalComponent } from './info-map.component';

describe('MyModalComponent', () => {
  let component: MyModalComponent;
  let fixture: ComponentFixture<MyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
