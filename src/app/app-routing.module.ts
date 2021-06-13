import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ReaderComponent } from './reader/reader.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Product', component: ProductComponent },
  { path: 'Reader', component: ReaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
