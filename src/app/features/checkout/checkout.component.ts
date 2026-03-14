import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { i18n } from '../../shared/data/i18n';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  i18n = i18n;
}
