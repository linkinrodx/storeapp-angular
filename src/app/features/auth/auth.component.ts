import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { i18n } from '../../shared/data/i18n';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [RouterLink, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  i18n = i18n;
}
