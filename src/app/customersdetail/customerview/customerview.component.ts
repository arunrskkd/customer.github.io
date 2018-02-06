import { Component, OnInit } from '@angular/core';
import { CustomerlistService } from './customerlist.service';
import { Response } from '@angular/http';
import { Customer } from '../customer.model'
@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.css']
})
export class CustomerviewComponent implements OnInit {
  custmr:Customer[];
  constructor(private custlist:CustomerlistService) {
    this.custlist.getdata().subscribe(
      (response)=>{
         console.log(response);
         this.custmr = response; 
        }

    );
   }

  ngOnInit() {
  }

}
