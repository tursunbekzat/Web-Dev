import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Recipe } from './models';

@Injectable({
  providedIn: 'root'
})  
export class RecipeService {

  private BASE_URL = 'http://127.0.0.1:8000/api/recipes/'
  constructor(private client: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.client.get<Recipe[]>(`${this.BASE_URL}`)
  }

  // toggleLike(recipeId: number): Observable<any> {
  //   const url = `${this.BASE_URL}recipes/${recipeId}/like/`;
  //   return this.client.put(url, {});
  // }
}
