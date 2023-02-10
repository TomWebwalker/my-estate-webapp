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
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

// TODO: validation messages
// TODO: optional in label
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
export class TextInputComponent<T = never>
  implements ControlValueAccessor, AfterViewInit
{
  @Input() inputLabel = '';
  @Input() inputType: TextInputType = 'text';
  @Input() inputPlaceholder = '';
  @Input() inputPrefix = '';
  @Input() inputSuffix = '';
  isDisabled = false;
  ngControl: FormControl | null = null;
  private readonly injector = inject(Injector);
  private onChange: (value: T) => void = () => null;
  private onTouch: (value: T) => void = () => null;

  ngAfterViewInit(): void {
    this.ngControl = this.injector.get(NgControl).control as FormControl;
  }

  registerOnChange(fn: never): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: never): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(obj: T): void {
    console.log(obj);
  }
}
