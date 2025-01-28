import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { ProductComponent } from "./products/product/product/product.component";
import { AddProductComponent } from "./products/add-product/add-product.component";


const APP_ROUTES : Routes = [
    {path: 'products', component: ProductsComponent},
    {path: 'products/add', component: AddProductComponent},
    {path: 'product/:id', component: ProductComponent}
];

export const ROUTING = 
RouterModule.forRoot(APP_ROUTES);