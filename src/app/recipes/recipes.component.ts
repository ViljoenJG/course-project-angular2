import { Component, OnInit } from '@angular/core';

import { RecipeListComponent } from "./recipe-list";
import { Recipe } from "./recipe";

@Component({
  moduleId: module.id,
  selector: 'rb-recipes',
  templateUrl: 'recipes.component.html',
  directives: [RecipeListComponent]
})
export class RecipesComponent {

}
