import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterForm } from './typing';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'my-estate-webapp-register-ui',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './register-ui.component.html',
  styleUrls: ['./register-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterUiComponent {
  @Input() form!: RegisterForm;
  @Output() formSubmitted = new EventEmitter<RegisterForm['value']>();

  formSubmittedHandler(): void {
    this.form.markAllAsTouched();
    this.formSubmitted.emit(this.form.value);
  }
}
