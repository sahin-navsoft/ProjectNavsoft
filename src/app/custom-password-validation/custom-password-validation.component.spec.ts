import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPasswordValidationComponent } from './custom-password-validation.component';

describe('CustomPasswordValidationComponent', () => {
  let component: CustomPasswordValidationComponent;
  let fixture: ComponentFixture<CustomPasswordValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPasswordValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPasswordValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
