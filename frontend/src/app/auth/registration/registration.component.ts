import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('toast')
  public form: FormGroup;

  constructor(private auth: AuthService, private router: Router, public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(5), Validators.required]),
      isTeacher: new FormControl(false),
    });
  }

  handleSuccessfulSignup() {
    this.snackBar.open('Rejestracja udane, za chwilę zostaniesz przekierowany.', 'Zamknij', {
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

  handleUnsuccessfulSignup() {
    this.snackBar.open('Rejestracja nieudana. Sprawdź czy dobrze wprowadziłeś dane.', 'Zamknij', {
      duration: 2000,
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
