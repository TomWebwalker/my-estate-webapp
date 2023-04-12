import { FormControl, FormGroup, Validators } from '@angular/forms';

export type AuthRegisterForm = FormGroup<{
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}>;

export const authRegisterForm: () => AuthRegisterForm = () =>   new FormGroup({
  name: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', Validators.required),
});
