import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('toast')
  public form: FormGroup;

  constructor(private auth: AuthService, private router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(5), Validators.required])
    });
  }

  handleSuccessfulLogin() {
    this.snackBar.open('Logowanie udane, za chwilę zostaniesz przekierowany.', 'Zamknij', {
      duration: 2000,
    });

    setTimeout((() => {
      if (this.auth.isTeacher()) {
        this.router.navigate(['/teacher']);
      } else {
        this.router.navigate(['/dashboard']);
      }
    }).bind(this), 2000);
  }

  handleUnsuccessfulLogin() {
    this.snackBar.open('Logowanie nieudane. Sprawdź czy dobrze wprowadziłeś dane.', 'Zamknij', {
      duration: 2000,
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
