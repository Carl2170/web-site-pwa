import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ContactRequset } from '../interfaces/contact_request.interface';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly baseUrl: string = environment.baseUrl;
  
  constructor(private http: HttpClient) { }
  
  sendContactForm(data: ContactRequset): Observable<any> {
    const url = `${this.baseUrl}/send-email`;

    return this.http.post<any>(url, data).pipe(
      catchError(this.handleError) // Manejo de errores
    );
  }
  
  private handleError(error: HttpErrorResponse) {
    // Aquí gestionamos los errores según el código de estado
    if (error.status === 400) {
      return throwError(() => 'Por favor, complete todos los campos correctamente.');
    } else if (error.status === 500) {
      return throwError(() => 'Hubo un problema al enviar el correo. Intente más tarde.');
    } else {
      return throwError(() => 'Ocurrió un error desconocido. Intente nuevamente.');
    }
  }
}
