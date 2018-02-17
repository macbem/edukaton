import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastComponent } from '../../shared/toast/toast.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('toast')
  public toast: ToastComponent;
  public form: FormGroup;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(5), Validators.required])
    });
  }

  handleSuccessfulLogin() {
    this.toast.addToast({
      title: 'Logowanie udane',
      msg: 'Za chwilę zostaniesz przekierowany',
      type: 'success'
    });

    setTimeout((() => {
      if (this.auth.isTeacher()) {
        this.router.navigate(['/teacher']);
      } else {
        this.router.navigate(['/dashboard']);
      }
    }).bind(this), 3000);
  }

  handleUnsuccessfulLogin() {
    this.toast.addToast({
      title: 'Logowanie nieudane.',
      msg: 'Sprawdź czy dane do logowania są prawidłowe i spróbuj ponownie.',
      type: 'error'
    });
  }

  handleFormSubmit(event: Event) {
    event.preventDefault();
    Object.values(this.form.controls).forEach(control => control.markAsTouched());

    if (this.form.valid) {
      this.auth.logIn(this.form.get('email').value, this.form.get('password').value)
        .subscribe(
          this.handleSuccessfulLogin.bind(this),
          this.handleUnsuccessfulLogin.bind(this),
        )
    }
  }
}
