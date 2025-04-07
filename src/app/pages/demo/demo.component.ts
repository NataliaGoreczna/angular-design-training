import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { DropdownComponent } from '../../components/dropdown/dropdown.component';
import { InputFieldComponent } from '../../components/input-field/input-field.component';
import { FormComponent } from '../../components/form/form.component';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'app-demo',
  imports: [
    ButtonComponent,
    DropdownComponent,
    InputFieldComponent,
    FormComponent,
    DialogComponent,
  ],
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {
  header: string = 'Mock Header';
  description: string = 'This is some mock content for the dialog.';
}
