import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IVacancy } from '../models';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  private baseUrl = 'http://localhost:8000/api/v1';

  constructor(private http: HttpClient) { }

  getVacanciesByCompanyId(companyId: number): Observable<IVacancy[]> {
    const url = `${this.baseUrl}/vacancies/?company=${companyId}`;
    return this.http.get<any>(url).pipe(
      map(response => response.results.map((vacancy: { id: any; name: any; description: any; salary: any; company: any; }) => ({
        id: vacancy.id,
        name: vacancy.name,
        description: vacancy.description,
        salary: vacancy.salary,
        company: vacancy.company
      })))
    );
  }

}
