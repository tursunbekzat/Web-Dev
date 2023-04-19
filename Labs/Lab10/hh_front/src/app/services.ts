import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICompany, IVacancy } from './models;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<ICompany[]> {
    const url = `${this.apiUrl}companies/`;
    return this.http.get<ICompany[]>(url);
  }

  getCompany(id: number): Observable<ICompany> {
    const url = `${this.apiUrl}companies/${id}/`;
    return this.http.get<ICompany>(url);
  }

  getCompanyVacancies(id: number): Observable<IVacancy[]> {
    const url = `${this.apiUrl}companies/${id}/vacancies/`;
    return this.http.get<IVacancy[]>(url);
  }

  getVacancies(): Observable<IVacancy[]> {
    const url = `${this.apiUrl}vacancies/`;
    return this.http.get<IVacancy[]>(url);
  }

  getVacancy(id: number): Observable<IVacancy> {
    const url = `${this.apiUrl}vacancies/${id}/`;
    return this.http.get<IVacancy>(url);
  }
}