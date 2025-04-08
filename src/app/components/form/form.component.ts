import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InputFieldComponent } from '../input-field/input-field.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [FormsModule, InputFieldComponent],
})
export class FormComponent {
  email = '';
  password = '';
  emailError = false;
  passwordError = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  onSubmit(form: NgForm) {
    this.clearErrors();
    if (!form.controls['email'].valid) {
      this.emailError = true;
    }
    if (!this.password) {
      this.passwordError = true;
    }
    if (this.emailError || this.passwordError) {
      return;
    }
    if (
      this.email === 'example@capgemini.com' &&
      this.password === 'qwerty123!'
    ) {
      this.successMessage = 'Login successful!';
    } else {
      this.errorMessage = 'Incorrect username or password';
    }
  }

  clearErrors() {
    this.emailError = false;
    this.passwordError = false;
    this.errorMessage = null;
    this.successMessage = null;
  }

  clearError() {
    this.errorMessage = null;
  }
}
