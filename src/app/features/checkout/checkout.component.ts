import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { i18n } from '../../shared/data/i18n';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  i18n = i18n;
  currentStep = 1;

  onSubmit() {
    console.log('Processing payment...');
  }
}
