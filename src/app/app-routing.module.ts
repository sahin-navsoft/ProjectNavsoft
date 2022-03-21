import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CustomPasswordValidationComponent } from './custom-password-validation/custom-password-validation.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './Guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductAboutComponent } from './product-about/product-about.component';
import { ProductResolver } from './product.resolver';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
 {path:'dashboard',component:DashboardComponent, },
 {path:'dashboardHome',component:DashboardHomeComponent, },
  { path: '', component: CardComponent,canActivate: [AuthGuard]  },
  { path: 'product-about/:id', component:ProductAboutComponent,canActivate: [AuthGuard], resolve: {product: ProductResolver}  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule],
})
export class AppRoutingModule {}
