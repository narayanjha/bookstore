import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimengModule } from './shared/primeng/primeng-module';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, PrimengModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Book Store');
  messageService = inject(MessageService);
  router = inject(Router);

  testToast() {
    this.messageService.add({
      severity: 'success',
      summary: 'Working',
      detail: 'Toast working successfully'
    });
  }

  login() {
    this.router.navigate(['/login']);
  }
  register() {
    this.router.navigate(['/register']);
  }
}
