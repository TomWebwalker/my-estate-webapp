import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterUiComponent } from './register-ui.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegisterUiComponent', () => {
  let component: RegisterUiComponent;
  let fixture: ComponentFixture<RegisterUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterUiComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterUiComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
