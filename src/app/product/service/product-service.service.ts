import { Injectable } from '@angular/core';
import { Product } from '../product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

    private products: Product[] = [
      { id: 1, name: 'iphone 12', price: 30.000 ,img: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600',discount:10,category:'Electronics' },
      { id: 2, name: 'Headphone', price: 25.00 ,img: 'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=600',discount:15,category:'Electronics'},
      { id: 3, name: 'Smart Watch', price: 3.000 ,img: 'https://images.pexels.com/photos/440320/pexels-photo-440320.jpeg?auto=compress&cs=tinysrgb&w=600',discount:20,category:'Electronicshes'},
      { id: 4, name: 'iphone 12', price: 30.000 ,img: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600',discount:10,category:'Electronics' },
      { id: 5, name: 'Headphone', price: 25.00 ,img: 'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=600',discount:15,category:'Electronics'},
      { id: 6, name: 'Smart Watch', price: 3.000 ,img: 'https://images.pexels.com/photos/440320/pexels-photo-440320.jpeg?auto=compress&cs=tinysrgb&w=600',discount:20,category:'Electronicshes'},
    ];
    private lastId: number = 3;
  
    getProducts(): Product[] {
      return this.products;
    }
  
    getProduct(id: number): Product{
      return this.products.find(product => product.id === id)!;
    }
  
    addProduct(product: Product): void {
      product.id = ++this.lastId;
      this.products.push(product);
    }
  
    updateProduct(product: Product): void {
      const index = this.products.findIndex(p => p.id === product.id);
      if (index !== -1) {
        this.products[index] = product;
      }
    }
  
    deleteProduct(id: number): void {
      const index = this.products.findIndex(product => product.id === id);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    }
  }