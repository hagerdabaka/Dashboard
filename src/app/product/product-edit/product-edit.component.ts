import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductServiceService } from '../service/product-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product: Product = { id: null, name: '', price: null  , img:'', discount:null ,category:''};
  isNew: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.product = this.productService.getProduct(id);
      this.isNew = false;
    }
  }

  onSave(): void {
    if (this.isNew) {
      this.productService.addProduct(this.product);
      Swal.fire('Thank you...', 'Added succesfully!', 'success')
    } else {
      this.productService.updateProduct(this.product);
      Swal.fire('Thank you...', 'updateded succesfully!', 'success')
    }
  }
}
