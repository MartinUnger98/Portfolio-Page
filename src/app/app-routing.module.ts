import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {path: '', component: PageComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'imprint', component: ImprintComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
