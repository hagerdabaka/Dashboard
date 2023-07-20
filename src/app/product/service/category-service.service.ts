import { Injectable } from '@angular/core';
import { Category } from '../category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
    private categories: Category[] = [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
      { id: 3, name: 'Category 3' }
    ];
    private lastId: number = 3;
  
    getCategories(): Category[] {
      return this.categories;
    }
  
    getCategory(id: number): Category {
      return this.categories.find(category => category.id === id);
    }
  
    addCategory(category: Category): void {
      category.id = ++this.lastId;
      this.categories.push(category);
    }
  
    updateCategory(category: Category): void {
      const index = this.categories.findIndex(c => c.id === category.id);
      if (index !== -1) {
        this.categories[index] = category;
      }
    }
  
    deleteCategory(id: number): void {
      const index = this.categories.findIndex(category => category.id === id);
      if (index !== -1) {
        this.categories.splice(index, 1);
      }
    }
  }