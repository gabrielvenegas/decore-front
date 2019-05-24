import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageModule } from 'src/pages/page.module';
import { RouterModule, Routes } from '@angular/router'
import { HomePage } from 'src/pages/home/home.page';
import { CartPage } from 'src/pages/cart/cart.page';
import { CheckoutPage } from 'src/pages/checkout/checkout.page';
import { StorePage } from 'src/pages/store/store.page';
import { ProductDetailPage } from 'src/pages/product-detail/product-detail.page';
import { ProfilePage } from 'src/pages/profile/profile.page';
import { PlanService } from 'src/services/plan.service';
import { HttpClientModule } from '@angular/common/http';
import {
  AuthGuardService as AuthGuard
} from '../services/auth-guard.service';
import { LoginComponent } from 'src/pages/login/login.component';
import { AuthService } from 'src/services/auth.service';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { SharedService } from 'src/services/shared.service';
const appRoutes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'cart', component: CartPage },
  { path: 'checkout', component: CheckoutPage, canActivate: [AuthGuard] },
  { path: 'store', component: StorePage },
  { path: 'store/product-detail', component: ProductDetailPage },
  { path: 'profile', component: ProfilePage },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home'
  }
];

export const jwtOptionsFactory = (dependency) => ({
  tokenGetter: () => dependency.getToken(),
  whitelistedDomains: []
});

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({ config: { tokenGetter(): string { return localStorage.getItem('access_token'); } } }),
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: 'enabled',
    }),
    PageModule,
  ],
  providers: [PlanService, AuthService, AuthGuard, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
