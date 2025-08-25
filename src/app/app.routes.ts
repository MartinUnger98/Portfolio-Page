import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  //{ path: 'legal-notice', component: LegalNoticeComponent },
  //{ path: 'privacy-policy', component: PrivacyPolicyComponent },

  { path: '**', redirectTo: '' }
];
