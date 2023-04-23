import { Component } from '@angular/core';
import { recipes, categories, Recipe } from 'src/app/models';
import { countries } from 'src/app/data/listOfCountries';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  recipes: Recipe[] = recipes;
  // recipe: Recipe;
  countries = countries;
  categories = categories;
  selectedFilterCountry: string = "Kazakhstan";
  selectedFilterCategory: string = "All";
  filteredItems = [...recipes];
  buttonislove!:boolean;
  buttonischose!:boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.recipes.forEach(recipe => {
      this.buttonislove = recipe.islike;
      this.buttonischose = recipe.ischoosen;
    });
  }

  changeFilterCategory(filter: string) {
    this.selectedFilterCategory = filter;
  }
  changeFilterCountry(filter: string) {
    this.selectedFilterCountry = filter;
  }
  filterItems() {
    if (this.selectedFilterCategory === "All") {
      this.filteredItems = this.recipes.filter(p => p.national === this.selectedFilterCountry);
    } else {
      this.filteredItems = this.recipes.filter(p => (p.category === this.selectedFilterCategory && p.national === this.selectedFilterCountry));
    }
    console.log("Category =", this.selectedFilterCategory, "\nCountry =", this.selectedFilterCountry, "\n")
  }

  notEmpty(): Boolean {
    return this.filteredItems.length !== 0;
  }
  islove(recipe:Recipe) {
    this.buttonislove = !this.buttonislove;
    recipe.islike = !recipe.islike;
  }
  isloveimg(recipe: Recipe) {
    if (recipe.islike) {
      return "https://cdn.pixabay.com/photo/2016/02/04/11/57/heart-1179054__480.png";
    } else {
      return "https://freepngimg.com/thumb/heart/2-2-heart-png-hd-thumb.png";
    }
  }
  ischose(recipe:Recipe) {
    this.buttonischose = !this.buttonischose;
    recipe.ischoosen = !recipe.ischoosen;
  }
  ischosenimg(recipe: Recipe) {
    if (recipe.ischoosen) {
      return "https://freepngimg.com/save/29176-empty-easter-basket-clipart/741x720";
    } else {
      return "https://toppng.com/uploads/preview/red-shopping-basket-png-11546973933krrsl7vne8.png";
    }
  }
}