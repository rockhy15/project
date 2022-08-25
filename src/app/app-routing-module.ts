import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { RouterTestingModule } from "@angular/router/testing";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';



const routes: Routes =[

    // {path:'',redirectTo:'products',pathMatch:'full'},
    // {path:'',component:HeaderComponent},
    {path:'', component: ProductsComponent},
    {path:'cart', component: CartComponent},
    { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent},
  {path: 'checkout', component : CheckoutComponent},
  {path:'shipping',component : ShippingComponent},
  {path:'payment', component : PaymentComponent},
  {path: 'confirmation', component : ConfirmationComponent},
 
];


@NgModule({
    imports: [
        RouterTestingModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }