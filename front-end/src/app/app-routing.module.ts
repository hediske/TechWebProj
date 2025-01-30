import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './user/auth.guard';
import { ProductComponent } from './products/product/product/product.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './user/guards/auth.guard';
import { LoggingComponent } from './admin/logging/logging.component';
const routes: Routes = [
  { path: 'logging', component: LoggingComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    // canActivate: [AuthGuard], (just bech manb9ach na3ml login kol mara)
    data: { role: 'admin' }
  },
  { path: 'product/:id', component: ProductComponent },
  { path: 'products', component: ProductsComponent },
  {
    path: 'access-denied',
    redirectTo: 'access-denied.html'
  },

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
