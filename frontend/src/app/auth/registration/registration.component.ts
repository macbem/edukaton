import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastComponent } from '../../shared/toast/toast.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('toast')
  public toast: ToastComponent;
  public form: FormGroup;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(5), Validators.required]),
      isTeacher: new FormControl(false),
    });
  }

  handleSuccessfulSignup() {
    this.toast.addToast({
      title: 'Rejestracja udana',
      msg: 'Za chwilę zostaniesz przekierowany.',
      type: 'success'
    });
    debugger;


    setTimeout((() => {
      if (this.auth.isTeacher()) {
        this.router.navigate(['/teacher']);
      } else {
        this.router.navigate(['/dashboard']);
      }
    }).bind(this), 3000);
  }

  handleUnsuccessfulSignup() {
    this.toast.addToast({
      title: 'Rejestracja nieudana.',
      msg: 'Sprawdź czy dane do logowania są prawidłowe oraz czy nie wykorzystałeś już tego maila i spróbuj ponownie.',
      type: 'error'
    });
  }

  handleFormSubmit(event: Event) {
    event.preventDefault();
    Object.values(this.form.controls).forEach(control => control.markAsTouched());

    if (this.form.valid) {
      this.auth.signUp(this.form.get('email').value, this.form.get('password').value, this.form.get('isTeacher').value)
        .subscribe(
          this.handleSuccessfulSignup.bind(this),
          this.handleUnsuccessfulSignup.bind(this)
        );
    }
  }
}
