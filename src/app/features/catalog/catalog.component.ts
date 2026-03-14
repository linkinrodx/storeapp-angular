import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUCTS, CATEGORIES, FAMILIES } from '../../shared/data/products';
import { RouterLink } from '@angular/router';
import { i18n } from '../../shared/data/i18n';

@Component({
  selector: 'app-catalog',
  imports: [CommonModule, RouterLink],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  i18n = i18n;
  products = PRODUCTS;
  categories = CATEGORIES;
  families = FAMILIES;
}
