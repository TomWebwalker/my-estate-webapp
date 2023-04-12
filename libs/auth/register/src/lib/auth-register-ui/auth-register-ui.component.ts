import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRegisterForm } from '../auth-register-form';

@Component({
  selector: 'my-estate-webapp-auth-register-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-register-ui.component.html',
  styleUrls: ['./auth-register-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthRegisterUiComponent {
  @Input() form!: AuthRegisterForm;
  @Output() formSubmitted = new EventEmitter<AuthRegisterForm['value']>();
}
