import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { ProductComponent } from "./products/product/product/product.component";


const APP_ROUTES : Routes = [
    {path: 'products', component: ProductsComponent},
    {path: 'product/:id', component: ProductComponent}
];

export const ROUTING = 
RouterModule.forRoot(APP_ROUTES);