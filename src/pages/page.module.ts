import { NgModule } from '@angular/core';
import { HomePage } from './home/home.page';
import { ComponentModule } from 'src/components/component.module';
import { CartPage } from './cart/cart.page';
import { CheckoutPage } from './checkout/checkout.page';
import { StorePage } from './store/store.page';
import { ProductDetailPage } from './product-detail/product-detail.page';
import { ProfilePage } from './profile/profile.page';
import { NguCarouselModule } from '@ngu/carousel';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { LoginComponent } from './login/login.component';
@NgModule({
    declarations: [
        HomePage,
        CartPage,
        CheckoutPage,
        StorePage,
        ProductDetailPage,
        ProfilePage,
        LoginComponent
    ],
    imports: [
        ComponentModule,
        NgxImageZoomModule.forRoot()
    ],
    providers: []
})
export class PageModule { } 