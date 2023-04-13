import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> {

  protected baseUrl = 'https://api.example.com';

  constructor(private http: HttpClient) {}

  getAll(): Observable<T[]> {
    const url = `${this.baseUrl}/items`;
    return this.http.get<T[]>(url);
  }

  getById(id: number): Observable<T> {
    const url = `${this.baseUrl}/items/${id}`;
    return this.http.get<T>(url);
  }

  create(item: T): Observable<T> {
    const url = `${this.baseUrl}/items`;
    return this.http.post<T>(url, item);
  }

  update(id: number, item: T): Observable<T> {
    const url = `${this.baseUrl}/items/${id}`;
    return this.http.put<T>(url, item);
  }

  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/items/${id}`;
    return this.http.delete(url);
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { BaseService } from './base.service';
// import { Book } from './book.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class BookService extends BaseService<Book> {
//   constructor(http: HttpClient) {
//     super(http);
//     this.baseUrl = 'https://api.example.com/books';
//   }
// }
