import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
  constructor(private http:HttpClient) { }

  form = new FormGroup({
    fullname: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    mobile: new FormControl('',[Validators.required,Validators.minLength(8)]),
    location: new FormControl('')
  });

  getCustomers(){
   return this.http.get("https://curddatabase.firebaseio.com/customer/-LW7GZalzxiEUo6swgfq.json");
  }

  insertCustomers(customers){
    return this.http.post('https://curddatabase.firebaseio.com/customer.json',{
      fullname:customers.fullname,
      email:customers.email,
      mobile:customers.mobile,
      location:customers.location
    })
  }
}
