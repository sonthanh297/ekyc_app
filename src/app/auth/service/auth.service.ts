import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { email, password }).subscribe(
      res => {
        // Handle successful login
      },
      err => {
        // Handle failed login
      }
    );
  }

  logout() {
    return this.http.post(`${this.apiUrl}/logout`, {}).subscribe(
      res => {
        // Handle successful logout
      },
      err => {
        // Handle failed logout
      });
}
}
