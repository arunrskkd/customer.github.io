import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class CustomerlistService {
   constructor(private http:Http) {



   }
   getdata(){
    return this.http.get('api/details').map((response:Response)=>{
      return response.json();
    });
  }
}
