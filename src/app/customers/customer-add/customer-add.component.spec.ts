import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomaerAddComponent } from './customaer-add.component';

describe('CustomaerAddComponent', () => {
  let component: CustomaerAddComponent;
  let fixture: ComponentFixture<CustomaerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomaerAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomaerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
