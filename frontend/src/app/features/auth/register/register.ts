import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router, RouterLink } from '@angular/router';

import { MessageService } from 'primeng/api';
import { ApiService } from '../../../core/services/api.service';
import { PrimengModule } from '../../../shared/primeng/primeng-module';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    PrimengModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  fb = inject(FormBuilder);
  router = inject(Router);
  messageService = inject(MessageService);
  private apiService = inject(ApiService);

  loading = false;

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    // mobile: ['', [
    //   Validators.required,
    //   Validators.minLength(10)
    // ]],
    password: ['', [
      Validators.required,
      Validators.minLength(6)
    ]],
    // confir3mPassword: ['', Validators.required]
  });

  register() {

    if (this.form.invalid) {
      this.form.markAllAsTouched();

      this.messageService.add({
        severity: 'warn',
        summary: 'Validation',
        detail: 'Please fill all required fields'
      });

      return;
    }

    const {
      password,
      // confirmPassword
    } = this.form.value;

    // if (password !== confirmPassword) {

    //   this.messageService.add({
    //     severity: 'error',
    //     summary: 'Password',
    //     detail: 'Passwords do not match'
    //   });

    //   return;
    // }

    this.loading = true;

    this.apiService.register(this.form.value).subscribe({
      next: (res: any) => {

        this.loading = false;

        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Registration successful'
        });

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);
      },

      error: (err) => {

        this.loading = false;

        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err?.error?.message || 'Registration failed'
        });
      }
    });
  }

  get f() {
    return this.form.controls;
  }
}
