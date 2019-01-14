import { Component, OnInit, OnChanges } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { CustomersModel } from '../customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit,OnChanges {
  customerListAvailable:boolean;
  customersList = [];
  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers()
        .subscribe((response:Response)=>{
          this.customersList.push(response);
          this.customerListAvailable = true;
          console.log(response);
        });
      
  }


  ngOnChanges(){
  }

}
