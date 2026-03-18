import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { LucideAngularModule, Search, User, Heart, ShoppingBag, Menu, X, Trash2, Plus, Minus, CreditCard, Truck, ChevronRight, ShieldCheck, Check, Banknote } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes, 
      withComponentInputBinding(),
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })
    ),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    importProvidersFrom(LucideAngularModule.pick({ Search, User, Heart, ShoppingBag, Menu, X, Trash2, Plus, Minus, CreditCard, Truck, ChevronRight, ShieldCheck, Check, Banknote }))
  ],
};
