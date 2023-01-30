import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RegisterForm,
  RegisterUiComponent,
} from '@my-estate-webapp/register/ui';
import { registerFeatureForm } from './register-feature-form';
import { RegisterGQL } from 'app-graphql';

@Component({
  selector: 'my-estate-webapp-register-feature',
  standalone: true,
  imports: [CommonModule, RegisterUiComponent],
  template: ` <my-estate-webapp-register-ui
    [form]="form"
    (formSubmitted)="formSubmitHandler($event)"
  ></my-estate-webapp-register-ui>`,
  styleUrls: ['./register-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterFeatureComponent {
  readonly form = registerFeatureForm();
  private readonly registerGQL = inject(RegisterGQL);

  formSubmitHandler(value: RegisterForm['value']): void {
    const { name, email, password } = value;
    if (!name || !email || !password) {
      return;
    }
    this.registerGQL
      .mutate({ name, email, password })
      .subscribe((result) => console.log(result));
  }
}
