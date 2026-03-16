import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { i18n } from '../../shared/data/i18n';
import { PRODUCTS } from '../../shared/data/products';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  i18n = i18n;
  products = PRODUCTS; // Show all products in the marquee
}
