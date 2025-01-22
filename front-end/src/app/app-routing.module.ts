import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './user/auth.guard';
import { ProductComponent } from './products/product/product/product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [authGuard],
    data: { role: 'admin' }
  },
  {path: 'product/:id', component: ProductComponent},
  {path: 'products', component: ProductsComponent},
  {
    path: 'access-denied',
    redirectTo: 'access-denied.html'
  },

  {
    path: '**',
    redirectTo: '',
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
