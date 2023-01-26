import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterForm } from './typing';

@Component({
  selector: 'my-estate-webapp-register-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register-ui.component.html',
  styleUrls: ['./register-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterUiComponent {
  @Input() form!: RegisterForm;
  @Output() formSubmitted = new EventEmitter<RegisterForm['value']>();
}
