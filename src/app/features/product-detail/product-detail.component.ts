import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { i18n } from '../../shared/data/i18n';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  i18n = i18n;
}
