import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Martin Unger | Fullstack Developer',
  },
  { path: 'imprint', component: ImprintComponent, title: 'Imprint' },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    title: 'Privacy Policy',
  },

  { path: '**', redirectTo: '' },
];
