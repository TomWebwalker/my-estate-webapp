import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRegisterUiComponent } from './auth-register-ui.component';

describe('AuthRegisterUiComponent', () => {
  let component: AuthRegisterUiComponent;
  let fixture: ComponentFixture<AuthRegisterUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthRegisterUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthRegisterUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
