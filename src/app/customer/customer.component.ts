import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  submitted = false;
  showSuccessMessagge:boolean;
  constructor(private customerSevice:CustomerService) { }
  
  formControls = this.customerSevice.form.controls;
  ngOnInit() {
  }
  onSubmit(){
    this.submitted = true;
    if(this.customerSevice.form.valid){
        this.customerSevice.insertCustomers(this.customerSevice.form.value)
        .subscribe((response:Response)=>{console.log(response)});
        this.showSuccessMessagge = true;
        setTimeout(()=>{
          this.showSuccessMessagge = false;
        },3000);
        this.submitted = false;
      }
      console.log(this.customerSevice.form.value);
    }
}


