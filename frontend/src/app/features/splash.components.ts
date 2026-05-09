import { Component } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [ProgressSpinnerModule],
  template: `
    <div class="splash-screen">
      <p-progressSpinner />
      <h2>Book Store</h2>
    </div>
  `,
  styles: [`
    .splash-screen{
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      gap:20px;
    }
  `]
})
export class SplashComponent {}