import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 'http://del.h-cdn.co/assets/17/34/980x490/landscape-1503418862-chicken-thighs-delish.jpg'),
    new Recipe('Test Recipe', 'This is a test', 'http://del.h-cdn.co/assets/17/34/980x490/landscape-1503418862-chicken-thighs-delish.jpg') 
  ];

  constructor() { }

  ngOnInit() {
  }

}
