import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TextInputComponent } from './text-input.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'TextInputComponent',
  component: TextInputComponent,
  args: {
    inputLabel: 'Label',
  },
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, FormsModule, BrowserAnimationsModule],
    }),
  ],
} as Meta<TextInputComponent>;

const Template: Story<TextInputComponent> = (args: TextInputComponent) => {
  const form = new FormGroup({
    name: new FormControl(),
  });

  return {
    props: {
      ...args,
      form,
    },
    template: `
      <form [formGroup]='form'>
        <my-estate-webapp-text-input 
          formControlName='name'
          [inputLabel]='inputLabel' 
          />
      </form>
    `,
  };
};

export const Primary = Template.bind({});
Primary.args = {};
