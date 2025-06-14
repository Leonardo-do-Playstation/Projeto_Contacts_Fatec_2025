import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/Contact';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({ 
  providedIn: 'root' 
})
export class ContactService {
  private apiUrl = 'http://localhost:8080/contacts';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }

  save(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact);
  }
}
