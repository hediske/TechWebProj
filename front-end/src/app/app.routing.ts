import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from "./product/product/product.component";


const APP_ROUTES : Routes = [
    {path: 'product', component: ProductComponent}
];

export const ROUTING = 
RouterModule.forRoot(APP_ROUTES);