import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomeraddComponent } from './customeradd/customeradd.component';
import { CustomerviewComponent } from './customerview/customerview.component';
const routes: Routes = [
  { path: '', component: CustomeraddComponent },
  { path: 'customeradd', component: CustomeraddComponent },
  { path: 'customerview', component: CustomerviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersdetailRoutingModule { }
