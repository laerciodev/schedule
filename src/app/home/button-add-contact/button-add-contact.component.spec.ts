import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddContactComponent } from './button-add-contact.component';

describe('ButtonAddContactComponent', () => {
  let component: ButtonAddContactComponent;
  let fixture: ComponentFixture<ButtonAddContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAddContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAddContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
