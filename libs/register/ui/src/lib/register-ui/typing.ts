import { FormControl, FormGroup } from '@angular/forms';

export type RegisterForm = FormGroup<{
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}>;