import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing-module';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductsComponent,
    HeaderComponent,
    FilterPipe,
    LoginComponent,
    SignupComponent,
    CheckoutComponent,
    ShippingComponent,
    PaymentComponent,
    ConfirmationComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
