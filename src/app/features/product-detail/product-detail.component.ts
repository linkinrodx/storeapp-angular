import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { i18n } from '../../shared/data/i18n';
import { PRODUCTS, Product } from '../../shared/data/products';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  i18n = i18n;
  private route = inject(ActivatedRoute);
  product: Product | undefined;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.product = PRODUCTS.find(p => p.id === Number(id));
    }
  }
}
