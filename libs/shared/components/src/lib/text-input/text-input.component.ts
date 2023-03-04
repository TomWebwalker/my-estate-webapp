import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  Injector,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputType } from './typings';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

// TODO: unit tests

@Component({
  selector: 'my-estate-webapp-text-input',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextInputComponent,
      multi: true,
    },
  ],
})
export class TextInputComponent implements AfterViewInit {
  @Input() inputLabel = '';
  @Input() inputType: TextInputType = 'text';
  @Input() inputPlaceholder = '';
  @Input() inputPrefix = '';
  @Input() inputSuffix = '';
  @Input() optional = false;
  @Input() errorDictionary: { error: string; message: string }[] = [];
  ngControl: FormControl | null = null;
  private readonly injector = inject(Injector);

  ngAfterViewInit(): void {
    this.ngControl = this.injector.get(NgControl).control as FormControl;
  }
}
