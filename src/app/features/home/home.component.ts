import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { i18n } from '../../shared/data/i18n';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  i18n = i18n;
  products = [
    { id: 1, name: 'Santal 33 Eau de Parfum', brand: 'LE LABO', price: 280, family: 'wood' },
    { id: 2, name: 'Baccarat Rouge 540', brand: 'MAISON FRANCIS KURKDJIAN', price: 345, family: 'oriental' },
    { id: 3, name: 'Rose Prick', brand: 'TOM FORD', price: 395, family: 'floral' },
    { id: 4, name: 'Gypsy Water', brand: 'BYREDO', price: 205, family: 'fresh' },
    { id: 5, name: 'Angels\' Share', brand: 'KILIAN', price: 230, family: 'gourmand' }
  ];
}
