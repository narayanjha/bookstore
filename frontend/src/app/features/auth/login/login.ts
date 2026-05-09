import { Component, inject } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { PrimengModule } from '../../../shared/primeng/primeng-module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    PrimengModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
    fb = inject(FormBuilder);

  router = inject(Router);

  apiService = inject(ApiService);

  messageService = inject(MessageService);

  loading = false;

  form = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],

    password: ['', Validators.required]
  });

  login() {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      this.messageService.add({
        severity: 'warn',
        summary: 'Validation',
        detail: 'Please fill all fields'
      });

      return;
    }

    this.loading = true;

    this.apiService.login(this.form.value)
      .subscribe({

        next: (res: any) => {

          this.loading = false;

          console.log(res);

          // ✅ save token
          localStorage.setItem(
            'token',
            res.token
          );

          // ✅ save user
          localStorage.setItem(
            'user',
            JSON.stringify(res.user)
          );

          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Login successful'
          });

          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1000);
        },

        error: (err) => {

          this.loading = false;

          this.messageService.add({
            severity: 'error',
            summary: 'Login Failed',
            detail:
              err?.error?.message ||
              'Invalid credentials'
          });
        }
      });
  }

  get f() {
    return this.form.controls;
  }
}
