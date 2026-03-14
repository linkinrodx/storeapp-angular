import { Component } from '@angular/core';
import { i18n } from '../../../shared/data/i18n';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
   i18n = i18n;
}
