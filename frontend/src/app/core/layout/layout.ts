import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimengModule } from '../../shared/primeng/primeng-module';

@Component({
  selector: 'app-layout',
  imports: [
    RouterModule,
    PrimengModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  sidebarVisible = false;

  menus = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      route: '/'
    },
    {
      label: 'Products',
      icon: 'pi pi-book',
      route: '/products'
    },
    {
      label: 'Cart',
      icon: 'pi pi-shopping-cart',
      route: '/cart'
    },
    {
      label: 'Orders',
      icon: 'pi pi-box',
      route: '/orders'
    },
    {
      label: 'Profile',
      icon: 'pi pi-user',
      route: '/profile'
    }
  ];
}
