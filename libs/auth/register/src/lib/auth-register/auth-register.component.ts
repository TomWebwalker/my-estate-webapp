import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterGQL } from 'app-graphql';
import { AuthRegisterForm, authRegisterForm } from '../auth-register-form';
import { AuthRegisterUiComponent } from '../auth-register-ui/auth-register-ui.component';

@Component({
  selector: 'my-estate-webapp-auth-register',
  standalone: true,
  imports: [CommonModule, AuthRegisterUiComponent],
  template: `<my-estate-webapp-auth-register-ui 
    [form]='form'
    (formSubmitted)='formSubmitHandler($event)'
  />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AuthRegisterComponent {
  readonly form = authRegisterForm();
  private readonly registerGQL = inject(RegisterGQL);

  formSubmitHandler(value: AuthRegisterForm['value']): void {
    const { name, email, password } = value;
    if (!name || !email || !password) {
      return;
    }
    this.registerGQL
      .mutate({ name, email, password })
      .subscribe((result) => console.log(result));
  }
}
