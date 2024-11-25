import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  currentPage = 1;
  pageSize = 10;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts(this.currentPage, this.pageSize).subscribe((data: any) => {
      this.products = data;
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.fetchProducts();
  }
}
