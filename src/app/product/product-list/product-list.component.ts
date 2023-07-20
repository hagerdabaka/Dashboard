import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductServiceService } from '../service/product-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent  implements OnInit {
  products: Product[];

  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onDelete(id: number): void {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
    Swal.fire(
      'Deleted!',
      ' The product has been deleted.',
      'success'
    )
  }
}
