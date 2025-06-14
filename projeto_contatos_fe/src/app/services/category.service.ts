
import { Injectable } from "@angular/core";
import { Category } from "../interfaces/Category";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({ 
  providedIn: 'root' 
})

export class CategoryService {
  private apiUrl = 'http://localhost:8080/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }
}
