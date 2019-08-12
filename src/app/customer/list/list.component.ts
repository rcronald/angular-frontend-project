import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/common/model/customer.model';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { RestApiService } from 'src/app/common/services/rest-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customerList:any = []
  selected:Customer

  constructor(public firebaseService: FirebaseService, 
              public restApi: RestApiService) { }

  ngOnInit() {
    this.getCustomersDataApi();
  }

  getCustomersDataFirebase(){
    this.firebaseService.getCustomers()
    .subscribe(result => {
      this.customerList = result;
      console.log(result)
    })
  }

  getCustomersDataApi(){
    return this.restApi.getCustomers().subscribe((data: {}) => {
      this.customerList = data;
    })
  }

  onSelect(customer: Customer): void {
    this.selected = customer;
  }

}