import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReaderComponent } from './reader/reader.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Product', component: ProductComponent },
  { path: 'Reader', component: ReaderComponent },
  { path: 'Data', component: DataComponent },
  { path: 'Reactive', component: ReactiveFormComponent },
  // Wild Card Route
  { path: '**', pathMatch   : 'full', component: ReaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
