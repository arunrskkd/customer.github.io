import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersdetailRoutingModule } from './customersdetail-routing.module';
import { CustomeraddComponent } from './customeradd/customeradd.component';
import { CustomerviewComponent } from './customerview/customerview.component';
import { CustomerlistService } from './customerview/customerlist.service';
import { FormsModule } from '@angular/forms';
import { AddserviceService } from '../customersdetail/customeradd/addservice.service'
import { AlertModule } from 'ngx-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    CustomersdetailRoutingModule,
    FormsModule,
    AlertModule.forRoot()
   
  ],
  declarations: [CustomeraddComponent, CustomerviewComponent],
  providers: [ CustomerlistService,AddserviceService ]
})
export class CustomersdetailModule { }
