import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:5000/api/products';

  constructor(private http: HttpClient) {}

  getProducts(page: number, size: number) {
    return this.http.get(`${this.apiUrl}?page=${page}&size=${size}`);
  }
}
