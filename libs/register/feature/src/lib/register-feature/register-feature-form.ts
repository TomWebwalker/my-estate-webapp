import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterForm } from '@my-estate-webapp/register/ui';

export const registerFeatureForm: () => RegisterForm = () =>
  new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
