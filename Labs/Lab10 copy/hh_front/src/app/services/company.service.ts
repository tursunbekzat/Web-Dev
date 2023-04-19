import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICompany } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://localhost:8000/api/companies/';

  constructor(private http: HttpClient) { }

  // Get all companies
  getCompanies(): Observable<ICompany[]> {
    return this.http.get<ICompany[]>(this.apiUrl);
  }

  // Get a single company by ID
  getCompany(id: number): Observable<ICompany> {
    return this.http.get<ICompany>(`${this.apiUrl}${id}/`);
  }
}
