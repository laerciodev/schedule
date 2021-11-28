import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Contact } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url = 'http://localhost:3000/contacts'
  httpOptions = {
    headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor(private httpClient: HttpClient) { }


  getContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteContact(contactId: number) {
    return this.httpClient.delete<Contact>(`${this.url}/${contactId}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createContact(contact: Contact): Observable<Contact> {
    const body = JSON.stringify(contact);
    return this.httpClient.post<Contact>(this.url, body, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  editContact(contact: Contact): Observable<Contact> {
    const body = JSON.stringify(contact);
    return this.httpClient.put<Contact>(
      `${this.url}/${contact.id}`,
      body,
      this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // frontEndError
      errorMessage = error.error.message;
    } else {
      // backendError
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
