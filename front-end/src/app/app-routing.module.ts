import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './user/auth.guard';
import { ProductComponent } from './products/product/product/product.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './user/guards/auth.guard';
import { LoggingComponent } from './admin/logging/logging.component';
import { RegisterComponent } from './admin/register/register.component';
import { AddProductComponent } from './products/add-product/add-product.component';

const routes: Routes = [
  { path: 'logging', component: LoggingComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard],
    data: { role: 'admin' }
  },
  {
    path: 'access-denied',
    redirectTo: 'access-denied.html'
  },
  {path: 'products', component: ProductsComponent},
  {path: 'products/add', component: AddProductComponent, canActivate: [authGuard] , data: { role: 'admin' }},
  {path: 'product/:id', component: ProductComponent},
  {
    path: '**',
    redirectTo: 'logging',
  },


  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   redirectTo: '404.html'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
