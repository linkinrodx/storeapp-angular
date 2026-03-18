import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { i18n } from '../../shared/data/i18n';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  i18n = i18n;
}
