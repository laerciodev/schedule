import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContactComponent } from './modal-contact.component';

describe('AddContactComponent', () => {
  let component: ModalContactComponent;
  let fixture: ComponentFixture<ModalContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalContactComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});