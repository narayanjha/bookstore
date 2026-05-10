import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);

  baseUrl = 'http://localhost:5000/api';

  login(data: any) {
    return this.http.post(
      `${this.baseUrl}/auth/login`,
      data
    );
  }

  // REGISTER
  register(data: any) {
    return this.http.post(
      `${this.baseUrl}/auth/register`,
      data
    );
  }

  getProducts() {
    return this.http.get(
      `${this.baseUrl}/product`
    );
  }

  addToCart(data: any) {
    return this.http.post(
      `${this.baseUrl}/cart/add`,
      data
    );
  }

  // GET PROFILE
  getProfile(userId: string) {
    return this.http.get(
      `${this.baseUrl}/user/${userId}`
    );
  }

  // UPDATE PROFILE
  updateProfile(
    userId: string,
    data: any
  ) {
    return this.http.put(
      `${this.baseUrl}/user/${userId}`,
      data
    );
  }
}