import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Product } from './product/product';
import { Aboutus } from './aboutus/aboutus';
import { Contact } from './contact/contact';
export const routes: Routes = [
     {path: 'home', component: Home},
     {path: 'contact', component: Contact},
     {path: 'product', component: Product},
       {path: 'aboutus', component: Aboutus},
      
        
       
];
